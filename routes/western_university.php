<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('westernuniversity/About');
})->name('home');
Route::get('/academic', function () {
    return Inertia::render('westernuniversity/Academic');
})->name('academic');
