<?php

namespace App\Http\Controllers;

use App\Exports\PostDailyViewExport;
use App\Models\PostCategory;
use App\Models\PostDailyView;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;



class PostViewController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $category_code = $request->input('category_code', '');
        $language = $request->input('language', '');
        $type = $request->input('type', '');
        $sortBy = $request->input('sortBy', 'view_date');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');
        $from_date = $request->input('from_date', null);
        $to_date = $request->input('to_date', null);

        $from_date = $from_date
            ? Carbon::parse($from_date)->setTimezone('Asia/Bangkok')->startOfDay()->toDateString()
            : Carbon::now()->setTimezone('Asia/Bangkok')->startOfYear()->toDateString();
        $to_date = $to_date
            ? Carbon::parse($to_date)->setTimezone('Asia/Bangkok')->endOfDay()->toDateString()
            : now()->endOfDay()->toDateString();

        $query = PostDailyView::query();

        $query->with('post');

        if ($from_date) {
            // dd($from_date);
            $query->where('view_date', '>=', $from_date);
        }

        if ($to_date) {
            $query->where('view_date', '<=', $to_date);
        }

        // filter inside relationship "post"
        $query->whereHas('post', function ($subQuery) use ($category_code, $language, $type, $search) {
            if ($category_code) {
                $subQuery->where('category_code', $category_code);
            }
            if ($language) {
                $subQuery->where('content_language', $language);
            }
            if ($type) {
                $subQuery->where('type', $type);
            }
            if ($search) {
                $subQuery->where(function ($q) use ($search) {
                    $q->where('title', 'LIKE', "%{$search}%")
                        ->orWhere('title_kh', 'LIKE', "%{$search}%")
                        ->orWhere('id', 'LIKE', "%{$search}%");
                });
            }
        });

        $query->orderBy($sortBy, $sortDirection);


        // if ($search) {
        //     $query->whereHas('post', function ($subQuery) use ($search) {
        //         $subQuery->where('title', 'LIKE', "%{$search}%");
        //     });
        // }

        $totalViews = (clone $query)->sum('view_counts');

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/post_view_counts/Index', [
            'tableData' => $tableData,
            'totalViews' => $totalViews,
            'from_date' => $from_date,
            'to_date' => $to_date,
            'postCategories' => PostCategory::where('status', 'active')->orderBy('id', 'desc')->get(),

        ]);
    }

    public function export(Request $request)
    {
        // dd($request->all());
        $from_date = $request->input('from_date', null);
        $to_date = $request->input('to_date', null);

        $from_date = $from_date
            ? Carbon::parse($from_date)->setTimezone('Asia/Bangkok')->startOfDay()->toDateString()
            : Carbon::now()->setTimezone('Asia/Bangkok')->startOfYear()->toDateString();
        $to_date = $to_date
            ? Carbon::parse($to_date)->setTimezone('Asia/Bangkok')->endOfDay()->toDateString()
            : now()->endOfDay()->toDateString();
        // dd($from_date, $to_date);

        $filters = [
            'type' => $request->input('type', ''),
            'language' => $request->input('language', ''),
            'category_code' => $request->input('category_code', ''),
            'search' => $request->input('search', ''),
            'status' => $request->input('status'),
            'sortBy' => $request->input('sortBy', 'view_date'),
            'sortDirection' => $request->input('sortDirection', 'desc'),
            'from_date' => $from_date,
            'to_date' => $to_date,
        ];

        return Excel::download(new PostDailyViewExport($filters), 'post_views.xlsx');
    }
}
