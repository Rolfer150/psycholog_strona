<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/o-mnie', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/uslugi', function () {
    return Inertia::render('services');
})->name('services');

Route::get('/umow-wizyte', function () {
    return Inertia::render('appointment');
})->name('appointment');

Route::get('/kontakt', function () {
    return Inertia::render('contact');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
