<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FCMToken;
use Illuminate\Http\Request;

class FCMTokenController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['token' => 'required|string']);

        FCMToken::updateOrCreate(
            ['token' => $request->token],
        );

        return response()->json(['success' => true]);
    }

    public function destroy($token)
    {
        FcmToken::where('token', $token)->delete();

        return response()->json(['status' => 'deleted']);
    }
}
