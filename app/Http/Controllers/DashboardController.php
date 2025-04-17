<?php

namespace App\Http\Controllers;

use App\Models\Post;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $post_daily_views_data = DB::table('post_daily_views')
            ->selectRaw('view_date as date, SUM(view_counts) as total')
            ->groupBy('view_date')
            ->orderBy('view_date')
            ->get();

        $post_counts = Post::count();

        // dd($post_daily_views);
        return Inertia::render('admin/dashboard/Index', [
            'post_daily_views_data' => $post_daily_views_data,
            'featureDatas' => [
                'post_counts' => $post_counts,

            ]
        ]);
    }
}
