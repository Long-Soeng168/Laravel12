<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');
        $category_code = $request->input('category_code');

        $query = Post::query();

        $query->with('created_by', 'images', 'category');

        if ($status) {
            $query->where('status', $status);
        }
        if ($category_code) {
            $query->where('category_code', $category_code);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->where('status', 'active')->paginate(10);

        return response()->json($tableData);
    }

    public function show(Post $post)
    {
        return response()->json($post->load('created_by', 'images', 'category'));
    }

    // Post Categories
    public function post_categories(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');

        $query = PostCategory::query();

        $query->with(relations: 'children');

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('name_kh', 'LIKE', "%{$search}%")
                    ->orWhere('code', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->where('parent_code', null)->where('status', 'active')->get();

        return response()->json($tableData);
    }
}
