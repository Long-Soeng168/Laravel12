<?php

namespace App\Http\Controllers;

use App\Exports\PostDailyViewExport;
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
        $sortBy = $request->input('sortBy', 'view_date');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');

        $startDate = Carbon::parse('2025-01-1');
        $endDate = Carbon::parse('2025-04-30');

        $query = PostDailyView::query();



        if (true) {
            $query->whereBetween('view_date', [$startDate, $endDate]);
        }

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        $query->with('post');

        if ($search) {
            $query->whereHas('post', function ($subQuery) use ($search) {
                $subQuery->where('title', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);
        $totalViews = $query->sum('view_counts');

        return Inertia::render('admin/post_view_counts/Index', [
            'tableData' => $tableData,
            'totalViews' => $totalViews,
        ]);
    }

    public function export(Request $request)
    {
        $filters = [
            'search' => $request->input('search', ''),
            'status' => $request->input('status'),
            'sortBy' => $request->input('sortBy', 'view_date'),
            'sortDirection' => $request->input('sortDirection', 'desc'),
            'startDate' => Carbon::parse('2025-01-01'),
            'endDate' => Carbon::parse('2025-04-30'),
        ];

        return Excel::download(new PostDailyViewExport($filters), 'post_views.xlsx');
    }
}
