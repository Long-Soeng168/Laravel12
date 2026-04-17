<?php

use App\Http\Controllers\FrontPage\PostController;
use App\Models\ApplicationInfo;
use App\Models\Banner;
use App\Models\FCMToken;
use App\Models\Heading;
use App\Models\Link;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

   $banners = Banner::orderBy('order_index')->where('position_code', 'TOP_HOMEPAGE')->where('status', 'active')->get();
   $recent_posts = Post::orderByDesc('post_date')->with('created_by', 'images', 'category', 'source_detail')->where('status', 'active')->limit(4)->get();
   // return [
   //    'endless_text_motion' => $endless_text_motion,
   //    'links' => $links,
   //    'banners' => $banners,
   //    'recent_posts' => $recent_posts,
   //    'post_categories' => $post_categories,
   //    'application_info' => $application_info,
   // ];

   return Inertia::render('FrontPage', [
      'banners' => $banners,
      'recent_posts' => $recent_posts,
   ]);
   // return redirect('/dashboard');
})->name('home');
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{post}', [PostController::class, 'show']);
Route::get('/share/posts/{post}', [PostController::class, 'show_static_post']);

Route::get('/pages/{position_code}', function (string $position_code) {
   $showData = Page::where('position_code', $position_code)->with('images')->firstOrFail();
   // return $showData;
   return Inertia::render('FrontPage/DetailPage', [
      'showData' => $showData,
   ]);
});
Route::get('/contact', function () {
   return Inertia::render('FrontPage/Contact/Index');
});

Route::get('/privacy', function () {
   return Inertia::render('Privacy');
})->name('home');


// === Client ===
// require __DIR__ . '/westec.php';
// require __DIR__ . '/vectorasoft.php';

// === Admin ===
require __DIR__ . '/settings.php';
require __DIR__ . '/file_manager.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';

use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;
use Kreait\Firebase\Factory;

Route::get('/test-firebase-messaging', function () {
   $messaging = (new Factory)
      ->withServiceAccount(base_path(env('FIREBASE_CREDENTIALS')))
      ->createMessaging();

   $deviceTokens = FCMToken::pluck('token')->toArray();

   // return $deviceTokens;

   if (empty($deviceTokens)) {
      return response()->json(['status' => 'error', 'message' => 'No tokens found'], 400);
   }

   $message = CloudMessage::new()
      ->withNotification(Notification::create('Title Notificationa', 'Body Notificationa', 'https://news-app.redcross.org.kh/crc-logo.png.png'))
      ->withData(['"type"' => '"post"', '"id"' => '"104"']);

   try {
      $sendReport = $messaging->sendMulticast($message, $deviceTokens);

      return response()->json([
         'status' => 'success',
         'successCount' => $sendReport->successes()->count(),
         'failureCount' => $sendReport->failures()->count(),
      ], 200);
   } catch (\Throwable $e) {
      return response()->json([
         'status' => 'error',
         'message' => $e->getMessage()
      ], 500);
   }
});
