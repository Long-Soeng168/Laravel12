<?php

use App\Http\Controllers\LinkController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PagePositionController;
use App\Http\Controllers\PostCategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\WebInfoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('admin/dashboard/Index');
        })->name('dashboard');
        Route::get('items', function () {
            return Inertia::render('admin/items/page');
        });
    });


    Route::resource('admin/website_info', WebInfoController::class);
    Route::post('admin/website_info/{website_info}/update', [WebInfoController::class, 'update']);
    Route::resource('admin/links', LinkController::class);
    Route::post('admin/links/{link}/update', [LinkController::class, 'update']);
    Route::post('admin/links/{link}/update_status', [LinkController::class, 'update_status']);
    
    // Project Route
    Route::resource('admin/projects', ProjectController::class);
    Route::post('admin/projects/{project}/update', [ProjectController::class, 'update']);
    Route::post('admin/projects/{project}/update_status', [ProjectController::class, 'update_status']);
    Route::get('admin/all_projects', [ProjectController::class, 'all_projects']);
    Route::delete('admin/projects/images/{image}', [ProjectController::class, 'destroy_image']);

    // Post Category Route
    Route::resource('admin/post_categories', PostCategoryController::class);
    Route::post('admin/post_categories/{postCategory}/update', [PostCategoryController::class, 'update']);
    Route::get('admin/all_page_categories', [PostCategoryController::class, 'all_page_categories']);
    Route::post('admin/post_categories/{postCategory}/update_status', [PostCategoryController::class, 'update_status']);
    // Post Route
    Route::resource('admin/posts', PostController::class);
    Route::post('admin/posts/{post}/update', [PostController::class, 'update']);
    Route::post('admin/posts/{post}/update_status', [PostController::class, 'update_status']);
    Route::delete('admin/posts/images/{image}', [PostController::class, 'destroy_image']);

    // Page Position Route
    Route::resource('admin/page_positions', PagePositionController::class);
    Route::post('admin/page_positions/{pagePosition}/update', [PagePositionController::class, 'update']);
    Route::post('admin/page_positions/{pagePosition}/update_status', [PagePositionController::class, 'update_status']);
    // Page Route
    Route::resource('admin/pages', PageController::class);
    Route::post('admin/pages/{page}/update', [PageController::class, 'update']);
    Route::post('admin/pages/{page}/update_status', [PageController::class, 'update_status']);
    Route::delete('admin/pages/images/{image}', [PageController::class, 'destroy_image']);

    // File Upload Route
    Route::get('/admin/ckeditor5', function () {
        return Inertia::render('plugins/ckeditor5/Index');
    });
    Route::get('/admin/my_file_manager', function () {
        return Inertia::render('plugins/file-manager/MyFileManager');
    });
});
