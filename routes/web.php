<?php

use App\Models\FCMToken;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
   // return Inertia::render('LaravelDefaultPage');
   return redirect('/dashboard');
})->name('home');
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
use Kreait\Firebase\Exception\MessagingException;
use Kreait\Firebase\Exception\FirebaseException;

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
      ->withData(['type' => 'post', 'id' => '104']);

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
