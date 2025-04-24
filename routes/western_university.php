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
Route::get('/detail/{id}', function ($id) {
    return Inertia::render('westernuniversity/about/Detail', [
        'id' => $id,
    ]);
})->name('detail');


// Academic
Route::get('/curriculum', function () {
    return Inertia::render('westernuniversity/academic/Curriculum');
})->name('curriculum');
Route::get('/programs', function () {
    return Inertia::render('westernuniversity/academic/Programs');
})->name('programs');
Route::get('/schedules_and_subjects', function () {
    return Inertia::render('westernuniversity/academic/ScheduleAndSubjects');
})->name('schedules_and_subjects');

Route::get('/admissions', function () {
    return Inertia::render('westernuniversity/admissions/Index');
})->name('admissions');

Route::get('/activities_and_events', function () {
    return Inertia::render('westernuniversity/school_life/ActivitiesAndEvents');
})->name('activities_and_events');

Route::get('/extracurricular_activities', function () {
    return Inertia::render('westernuniversity/school_life/ExtracurricularActivities');
})->name('extracurricular_activities');

Route::get('/outreach_programs', function () {
    return Inertia::render('westernuniversity/school_life/OutreachPrograms');
})->name('outreach_programs');

Route::get('/student_council', function () {
    return Inertia::render('westernuniversity/school_life/StudentCouncil');
})->name('student_council');

Route::get('/news_and_blogs', function () {
    return Inertia::render('westernuniversity/school_life/NewsAndBlogs');
})->name('news_and_blogs');

Route::get('/contact', function () {
    return Inertia::render('westernuniversity/contact/Contact');
})->name('contact');

Route::get('/careers', function () {
    return Inertia::render('westernuniversity/contact/Careers');
})->name('careers');




