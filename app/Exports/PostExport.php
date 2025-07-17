<?php

namespace App\Exports;

use App\Models\Post;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PostExport implements FromQuery, WithMapping, WithHeadings
{
    protected $filters;

    public function __construct($filters)
    {
        $this->filters = $filters;
    }

    public function query()
    {
        $query = Post::query()
            ->whereBetween('post_date', [$this->filters['from_date'], $this->filters['to_date']])
            ->orderBy($this->filters['sortBy'], $this->filters['sortDirection']);

        if (!empty($this->filters['status'])) {
            $query->where('status', $this->filters['status']);
        }

        if (!empty($this->filters['search'])) {
            $search = $this->filters['search'];
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%");
            });
        }

        $query->with('created_by_user', 'category');

        return $query;
    }

    public function map($post): array
    {
        return [
            $post->id ?? '---',
            strip_tags($post->title) ?? '---',
            Carbon::parse($post->post_date)->format('Y-m-d'),
            $post->status ?? '---',
            $post->link ?? '---',
            $post->category?->name ?? '---',
            $post->created_by_user?->name ?? '---',
            $post->total_view_counts ?? '0',
        ];
    }

    public function headings(): array
    {
        return [
            'ID',
            'Post Title',
            'Post Date',
            'Status',
            'Link',
            'Category',
            'Post By',
            'Total View Counts',
        ];
    }
}
