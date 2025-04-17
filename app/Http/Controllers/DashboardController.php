<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Link;
use App\Models\Page;
use App\Models\Post;
use App\Models\User;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $post_daily_views_data = DB::table('post_daily_views')
            ->selectRaw('view_date as date, SUM(view_counts) as total')
            ->where('view_date', '>=', now()->subDays(6)->toDateString())
            ->groupBy('view_date')
            ->orderBy('view_date')
            ->get();

        $post_counts = Post::count();
        $page_counts = Page::count();
        $link_counts = Link::count();
        $banner_counts = Banner::count();
        $user_counts = User::count();

        // dd($post_daily_views);
        return Inertia::render('admin/dashboard/Index', [
            'post_daily_views_data' => $post_daily_views_data,
            'featureDatas' => [
                'post_counts' => $post_counts,
                'page_counts' => $page_counts,
                'link_counts' => $link_counts,
                'banner_counts' => $banner_counts,
                'user_counts' => $user_counts,
            ]
        ]);
    }
}
