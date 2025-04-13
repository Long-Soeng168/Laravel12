<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
   // return Inertia::render('LaravelDefaultPage');
   return redirect('/dashboard');
})->name('home');

// === Client ===
// require __DIR__ . '/western_university.php';
// require __DIR__ . '/westec.php';
// require __DIR__ . '/vectorasoft.php';

// === Admin ===
require __DIR__ . '/settings.php';
require __DIR__ . '/file_manager.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';


