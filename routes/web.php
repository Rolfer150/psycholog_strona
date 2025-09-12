<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/o-mnie', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/uslugi-i-ceny', [ServiceController::class, 'public'])->name('services.public');
Route::get('/uslugi-i-ceny/{service}', [ServiceController::class, 'show'])->name('services.show');

Route::get('/kontakt', [MessageController::class, 'create'])->name('messages.create');
//Route::post('/kontakt/store', [MessageController::class, 'store'])->name('messages.store');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::prefix('dashboard/services')->name('services.')->group(function () {
        Route::get('/', [ServiceController::class, 'index'])->name('index');
        Route::get('/create', [ServiceController::class, 'create'])->name('create');
        Route::get('/show/{service}', [ServiceController::class, 'adminShow'])->name('admin-show');
        Route::get('/edit/{service}', [ServiceController::class, 'edit'])->name('edit');
        Route::post('/', [ServiceController::class, 'store'])->name('store');
        Route::put('/{service}', [ServiceController::class, 'update'])->name('update');
        Route::delete('/{service}', [ServiceController::class, 'destroy'])->name('destroy');
    });
//    Route::prefix('dashboard/messages')->name('messages.')->group(function () {
//        Route::get('/', [MessageController::class, 'index'])->name('index');
//        Route::get('/show/{message}', [MessageController::class, 'show'])->name('show');
//    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
