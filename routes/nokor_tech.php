<?php

use App\Http\Controllers\NokorTechController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [NokorTechController::class, 'index']);
