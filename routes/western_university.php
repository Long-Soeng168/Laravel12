<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('westernuniversity/About');
})->name('home');
Route::get('/hestory_and_values', function () {
    return Inertia::render('westernuniversity/about/HestoryAndValues');
})->name('hestory_and_values');
Route::get('/school_facilities', function () {
    return Inertia::render('westernuniversity/about/SchoolFacilities');
})->name('school_facilities');
Route::get('/campuses', function () {
    return Inertia::render('westernuniversity/about/Campuses');
})->name('campuses');

// Academic
Route::get('/curriculum', function () {
    return Inertia::render('westernuniversity/academic/Curriculum');
})->name('curriculum');
Route::get('/programs', function () {
    return Inertia::render('westernuniversity/academic/Programs');
})->name('programs');
