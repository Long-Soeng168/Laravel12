<?php

use App\Http\Controllers\RuleLibraryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [RuleLibraryController::class, 'index']);
Route::get('/collections', [RuleLibraryController::class, 'collections']);
Route::get('/detail/{id}', [RuleLibraryController::class, 'detail']);
