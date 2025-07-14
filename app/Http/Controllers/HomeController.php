<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeResource;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $services = Service::latest()->get();

        return Inertia::render('home', [
            'services' => HomeResource::collection($services)->resolve(),
        ]);
    }
}
