<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Resources\VisitorResource;
use App\Models\Visitor;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->input('type', 'day');

        if ($type === 'hour') {
            // 60 min, dla wybranego dnia lub dziś
            $date = $request->input('date', now()->timezone('Europe/Warsaw')->toDateString());
            $query = Visitor::whereDate('visited_at', $date)
                ->select(DB::raw('MINUTE(visited_at) as label'), DB::raw('COUNT(*) as count'))
                ->groupBy(DB::raw('MINUTE(visited_at)'))
                ->pluck('count', 'label')->all();

            $stats = [];
            for ($m = 0; $m < 60; $m++) {
                $stats[] = [
                    'label' => str_pad($m, 2, '0', STR_PAD_LEFT),
                    'count' => $query[$m] ?? 0,
                ];
            }
        }
        elseif ($type === 'day') {
            // 24 godziny (dla dziś lub podanego dnia)
            $date = $request->input('date', now()->timezone('Europe/Warsaw')->toDateString());
            $query = Visitor::whereDate('visited_at', $date)
                ->select(DB::raw('HOUR(visited_at) as label'), DB::raw('COUNT(*) as count'))
                ->groupBy(DB::raw('HOUR(visited_at)'))
                ->pluck('count', 'label')->all();

            $stats = [];
            for ($h = 0; $h < 24; $h++) {
                $stats[] = [
                    'label' => str_pad($h, 2, '0', STR_PAD_LEFT) . ':00',
                    'count' => $query[$h] ?? 0,
                ];
            }
        }
        elseif ($type === 'week') {
            // Europe/Warsaw
            $now = now()->timezone('Europe/Warsaw');
            // Poniedziałek tego tygodnia
            $startOfWeek = $now->copy()->startOfWeek();
            $endOfToday = $now->copy()->endOfDay();

            $labels = [];
            $dates = [];
            $daysOfWeek = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
            for ($d = 0; $d <= $now->dayOfWeekIso - 1; $d++) {
                $date = $startOfWeek->copy()->addDays($d);
                $labels[] = $daysOfWeek[$d];
                $dates[] = $date->toDateString();
            }

            $query = Visitor::whereBetween('visited_at', [$startOfWeek, $endOfToday])
                ->select(DB::raw('DATE(visited_at) as date'), DB::raw('COUNT(*) as count'))
                ->groupBy('date')
                ->pluck('count', 'date')->all();

            $stats = [];
            foreach ($dates as $i => $date) {
                $stats[] = [
                    'label' => $labels[$i],
                    'count' => $query[$date] ?? 0,
                ];
            }
        }
        elseif ($type === 'month') {
            $year = now()->year;
            $month = now()->month;
            $daysInMonth = now()->daysInMonth;
            $labels = [];
            for ($d = 1; $d <= $daysInMonth; $d++) {
                $labels[] = Carbon::create($year, $month, $d)->format('Y-m-d');
            }
            $query = Visitor::whereYear('visited_at', $year)
                ->whereMonth('visited_at', $month)
                ->select(DB::raw('DATE(visited_at) as label'), DB::raw('COUNT(*) as count'))
                ->groupBy(DB::raw('DATE(visited_at)'))
                ->pluck('count', 'label')->all();

            $stats = [];
            foreach ($labels as $label) {
                $stats[] = [
                    'label' => $label,
                    'count' => $query[$label] ?? 0,
                ];
            }
        }
        else { // year
            $year = now()->year;
            $labels = [];
            for ($m = 1; $m <= 12; $m++) {
                $labels[] = sprintf('%04d-%02d', $year, $m);
            }
            $query = Visitor::whereYear('visited_at', $year)
                ->select(DB::raw('DATE_FORMAT(visited_at, "%Y-%m") as label'), DB::raw('COUNT(*) as count'))
                ->groupBy(DB::raw('DATE_FORMAT(visited_at, "%Y-%m")'))
                ->pluck('count', 'label')->all();

            $stats = [];
            foreach ($labels as $label) {
                $stats[] = [
                    'label' => $label,
                    'count' => $query[$label] ?? 0,
                ];
            }
        }

        $today = Visitor::whereDate('visited_at', today())->count();
        $lastHour = Visitor::where('visited_at', '>=', now()->subHour())->count();
        $total = Visitor::count();
        $visits = Visitor::latest('visited_at')->limit(20)->get();

        return Inertia::render('dashboard', [
            'visits_today'    => $today,
            'visits_lastHour' => $lastHour,
            'visits_total'    => $total,
            'visits'          => VisitorResource::collection($visits),
            'stats'           => $stats,
            'type'            => $type,
        ]);
    }
}

