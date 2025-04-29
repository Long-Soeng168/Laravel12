<?php

use Illuminate\Support\Facades\Route;

// Default Homepage
Route::get('/', function () {
   // return Inertia::render('LaravelDefaultPage');
   return redirect('/dashboard');
})->name('home');

// Switch Language
Route::get('/lang/{locale}', function ($locale) {
   if (!in_array($locale, ['en', 'kh'])) {
       abort(404);
   }
   session(['locale' => $locale]);
   return redirect()->back();
});


// === Client ===
// require __DIR__ . '/nokor_tech.php';
// require __DIR__ . '/westec.php';
require __DIR__ . '/western_university.php'; 
// require __DIR__ . '/westec.php';
// require __DIR__ . '/western_university.php'; 
// require __DIR__ . '/vectorasoft.php';
// require __DIR__ . '/rule_library.php';

// === Admin ===
require __DIR__ . '/settings.php';
require __DIR__ . '/file_manager.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';


