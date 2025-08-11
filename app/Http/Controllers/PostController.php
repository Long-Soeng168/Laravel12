<?php

namespace App\Http\Controllers;

use App\Exports\PostExport;
use App\Helpers\ImageHelper;
use App\Models\FCMToken;
use App\Models\Link;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostImage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;
use Kreait\Firebase\Factory;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
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

        $query = Post::query();

        $query->with('created_by', 'updated_by', 'images', 'category', 'source_detail');

        if ($from_date) {
            // dd($from_date);
            $query->where('post_date', '>=', $from_date);
        }

        if ($to_date) {
            $query->where('post_date', '<=', $to_date);
        }

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%")
                    ->orWhere('id', 'LIKE', "%{$search}%");
            });
        }

        $totalRecord = (clone $query)->count();

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/posts/Index', [
            'tableData' => $tableData,
            'totalRecord' => $totalRecord,
            'from_date' => $from_date,
            'to_date' => $to_date,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('admin/posts/Create', [
            'links' => Link::orderBy('title')->where('status', 'active')->get(),
            'postCategories' => PostCategory::where('status', 'active')->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request->all();
        $validated = $request->validate([
            'title' => 'required|string|max:500',
            'notification' => 'required|string|max:500',
            'post_date' => 'required|date',
            'title_kh' => 'nullable|string|max:255',
            'short_description' => 'nullable|string|max:500',
            'short_description_kh' => 'nullable|string|max:500',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'source' => 'nullable|string|max:255',
            'category_code' => 'nullable|string',
            'type' => 'nullable|string',
            'status' => 'nullable|string|in:active,inactive',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $validated['created_by'] = $request->user()->id;
        $validated['updated_by'] = $request->user()->id;
        $validated['post_date'] = Carbon::parse($validated['post_date'])->setTimezone('Asia/Bangkok')->startOfDay()->toDateString();


        $image_files = $request->file('images');
        unset($validated['images']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        $created_post = Post::create($validated);

        if ($image_files) {
            try {
                foreach ($image_files as $image) {
                    $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/posts', 800);
                    PostImage::create([
                        'image' => $created_image_name,
                        'post_id' => $created_post->id,
                    ]);
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
            }
        }

        // Start Notification

        $messaging = (new Factory)
            ->withServiceAccount(base_path(env('FIREBASE_CREDENTIALS')))
            ->createMessaging();

        $deviceTokens = FCMToken::pluck('token')->toArray();

        // return $deviceTokens;

        if (empty($deviceTokens)) {
            return response()->json(['status' => 'error', 'message' => 'No tokens found'], 400);
        }

        $notifcationTitle = strip_tags($validated['title']);
        $notifcationBody = $validated['post_date'];
        $notificationPostId = (string) $created_post->id;

        $message = CloudMessage::new()
            ->withNotification(Notification::create($notifcationTitle, $notifcationBody, 'https://news-app.redcross.org.kh/crc-logo.png.png'))
            ->withData(['"type"' => '"post"', '"id"' => '"' . $notificationPostId . '"']);


        try {
            if ($validated['notification'] == 'push') {
                // return 'Push success';
                $sendReport = $messaging->sendMulticast($message, $deviceTokens);
            }
            // return response()->json([
            //     'status' => 'success',
            //     'successCount' => $sendReport->successes()->count(),
            //     'failureCount' => $sendReport->failures()->count(),
            // ], 200);
        } catch (\Throwable $e) {
            // return response()->json([
            //     'status' => 'error',
            //     'message' => $e->getMessage()
            // ], 500);
        }

        // End Notification

        return redirect()->back()->with('success', 'Post Created Successfully!.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('admin/posts/Create', [
            'links' => Link::orderBy('title')->where('status', 'active')->get(),
            'editData' => $post->load('images'),
            'postCategories' => PostCategory::where('status', 'active')->orderBy('id', 'desc')->get(),
            'readOnly' => true,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit(Post $post)
    {
        return Inertia::render('admin/posts/Create', [
            'links' => Link::orderBy('title')->where('status', 'active')->get(),
            'editData' => $post->load('images'),
            'postCategories' => PostCategory::where('status', 'active')->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        // dd($request->all());
        $validated = $request->validate([
            'title' => 'required|string|max:500',
            'post_date' => 'nullable',
            'title_kh' => 'nullable|string|max:255',
            'short_description' => 'nullable|string|max:500',
            'short_description_kh' => 'nullable|string|max:500',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'source' => 'nullable|string|max:255',
            'category_code' => 'nullable|string',
            'type' => 'nullable|string',
            'status' => 'nullable|string|in:active,inactive',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $validated['created_by'] = $request->user()->id;
        $validated['updated_by'] = $request->user()->id;
        $validated['post_date'] = Carbon::parse($validated['post_date'])->setTimezone('Asia/Bangkok')->startOfDay()->toDateString();
        // $validated['post_date'] = Carbon::parse($validated['post_date'])->addDay()->toDateString();

        $image_files = $request->file('images');
        unset($validated['images']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        $post->update($validated);

        if ($image_files) {
            try {
                foreach ($image_files as $image) {
                    $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/posts', 800);
                    PostImage::create([
                        'image' => $created_image_name,
                        'post_id' => $post->id,
                    ]);
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
            }
        }
        return redirect()->back()->with('success', 'Post Updated Successfully!.');
    }

    public function update_status(Request $request, Post $post)
    {
        $request->validate([
            'status' => 'required|string|in:active,inactive',
        ]);
        $post->update([
            'status' => $request->status,
        ]);

        return redirect()->back()->with('success', 'Status updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        if (count($post->images) > 0) {
            foreach ($post->images as $image) {
                ImageHelper::deleteImage($image->image, 'assets/images/posts');
            }
        }
        $post->delete();
        return redirect()->back()->with('success', 'post deleted successfully.');
    }

    public function destroy_image(PostImage $image)
    {
        // Debugging (Check if model is found)
        if (!$image) {
            return redirect()->back()->with('error', 'Image not found.');
        }

        // Call helper function to delete image
        ImageHelper::deleteImage($image->image, 'assets/images/posts');

        // Delete from DB
        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully.');
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
            'search' => $request->input('search', ''),
            'status' => $request->input('status'),
            'sortBy' => $request->input('sortBy', 'id'),
            'sortDirection' => $request->input('sortDirection', 'desc'),
            'from_date' => $from_date,
            'to_date' => $to_date,
        ];

        return Excel::download(new PostExport($filters), 'posts_export_file.xlsx');
    }
}
