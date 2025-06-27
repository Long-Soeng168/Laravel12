<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('cam-active-two/Index');
})->name('home');

Route::get('/solutions', function () {
    return Inertia::render('cam-active-two/Solutions');
});

Route::get('/impact', function () {
    return Inertia::render('cam-active-two/Impact');
});

Route::get('/company', function () {
    return Inertia::render('cam-active-two/Company');
});

Route::get('/insights', function () {
    return Inertia::render('cam-active-two/Insights');
});
Route::get('/posts', function () {
    return Inertia::render('cam-active-two/Posts');
});
Route::get('/posts/{id}', function () {
    return Inertia::render('cam-active-two/posts/Show');
});

Route::get('/careers', function () {
    return Inertia::render('cam-active-two/Careers');
});
Route::get('/about', function () {
    return Inertia::render('cam-active-two/About');
});

Route::get('/contact', function () {
    return Inertia::render('cam-active-two/Contact');
});
