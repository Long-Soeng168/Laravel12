<?php

namespace App\Exports;

use App\Models\PostDailyView;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PostDailyViewExport implements FromQuery, WithMapping, WithHeadings
{
    protected $filters;

    public function __construct($filters)
    {
        $this->filters = $filters;
    }

    public function query()
    {
        $query = PostDailyView::query()
            ->with('post')
            ->whereBetween('view_date', [$this->filters['from_date'], $this->filters['to_date']])
            ->orderBy($this->filters['sortBy'], $this->filters['sortDirection']);

        $category_code = $this->filters['category_code'];
        $language = $this->filters['language'];
        $type = $this->filters['type'];
        $search = $this->filters['search'];
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

        // if (!empty($this->filters['search'])) {
        //     $query->whereHas('post', function ($subQuery) {
        //         $subQuery->where('title', 'LIKE', "%{$this->filters['search']}%");
        //     });
        // }

        return $query;
    }

    public function map($view): array
    {
        return [
            strip_tags($view->post?->title ?? 'N/A'),
            $view->post?->content_language ?? 'N/A',
            $view->view_date,
            $view->view_counts,
        ];
    }

    public function headings(): array
    {
        return [
            'Post Title',
            'Post Language',
            'View Date',
            'View Counts',
        ];
    }
}
