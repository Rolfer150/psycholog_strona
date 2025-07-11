<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackVisitors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ip = $request->ip();
        $userAgent = $request->header('User-Agent');
        $now = now();
        $hourAgo = $now->copy()->subHour();

        // Sprawdź, czy już był taki wpis w ostatniej godzinie
        $exists = Visitor::where('ip_address', $ip)
            ->where('user_agent', $userAgent)
            ->where('visited_at', '>=', $hourAgo)
            ->exists();

        if (!$exists) {
            Visitor::create([
                'ip_address' => $ip,
                'user_agent' => $userAgent,
                'visited_at' => $now,
            ]);
        }

        return $next($request);
    }
}
