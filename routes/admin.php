<?php

use App\Http\Controllers\ApplicationInfoController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BannerPositionController;
use App\Http\Controllers\HeadingController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PagePositionController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PostCategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {

    // === Testing Spatie Role & Permission ===
    Route::group(['middleware' => ['role:admin']], function () {
        Route::get('/admin_test', function () {
            return 'Admin Login Success';
        });
    });
    Route::group(['middleware' => ['permission:create post']], function () {
        Route::get('/permission_test', function () {
            return 'Permission Create post';
        });
    });
    // === End Testing Spatie Role & Permission ===

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('admin/dashboard/Index');
        })->name('dashboard');
        Route::get('items', function () {
            return Inertia::render('admin/items/page');
        });
    });


    // Application Info Router
    Route::resource('admin/application_info', ApplicationInfoController::class);
    Route::post('admin/application_info/{application_info}/update', [ApplicationInfoController::class, 'update']);

    // Links Route
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

    // Banner Position Route
    Route::resource('admin/banner_positions', BannerPositionController::class);
    Route::post('admin/banner_positions/{bannerPosition}/update', [BannerPositionController::class, 'update']);
    Route::post('admin/banner_positions/{bannerPosition}/update_status', [BannerPositionController::class, 'update_status']);
    // Banner Route
    Route::resource('admin/banners', BannerController::class);
    Route::post('admin/banners/{banner}/update', [BannerController::class, 'update']);
    Route::post('admin/banners/{banner}/update_status', [BannerController::class, 'update_status']);
    Route::delete('admin/banners/remove_image/{banner}', [BannerController::class, 'remove_banner_image']);
    Route::delete('admin/banners/images/{image}', [BannerController::class, 'destroy_image']);

    // Heading Route
    Route::resource('admin/headings', HeadingController::class);
    Route::post('admin/headings/{heading}/update', [HeadingController::class, 'update']);
    Route::post('admin/headings/{heading}/update_status', [HeadingController::class, 'update_status']);

    // Roles & Permissions & User Route 
    Route::resource('admin/permissions', PermissionController::class);
    Route::resource('admin/roles', RoleController::class);
    Route::get('admin/all_roles', [RoleController::class, 'all_roles']);
    Route::resource('admin/users', UserController::class);
    Route::post('admin/users/{user}/update', [UserController::class, 'update']);
    // Route::get('/assign-admin', [RoleController::class, 'assignAdmin']);


    // File Upload Route
    Route::get('/admin/ckeditor5', function () {
        return Inertia::render('plugins/ckeditor5/Index');
    });
    Route::get('/admin/my_file_manager', function () {
        return Inertia::render('plugins/file-manager/MyFileManager');
    });
});
