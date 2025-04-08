<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Models\WebInfo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');

        $query = WebInfo::query();

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('address', 'LIKE', "%{$search}%");
            });
        }

        $query->orderBy($sortBy, $sortDirection);

        $tableData = WebInfo::get();

        return Inertia::render('admin/web_info/Index', [
            'tableData' => $tableData,
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/web_info/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255',
            'opening_hours' => 'nullable|string|max:255',
            'email' => 'nullable|string|max:255',
            'copyright' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $image_files = $request->file('images');
        unset($validated['image']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }



        if ($image_files) {
            try {
                foreach ($image_files as $image) {
                    $created_image_name = ImageHelper::uploadAndResizeImage($image, 'assets/images/website_info', 600);
                    $validated['image'] = $created_image_name;
                    break; // Stop after the first image
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload image: ' . $e->getMessage());
            }
        }

        WebInfo::create($validated);

        return redirect()->back()->with('success', 'Project created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(WebInfo $WebInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WebInfo $WebInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255',
            'opening_hours' => 'nullable|string|max:255',
            'email' => 'nullable|string|max:255',
            'copyright' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $image_files = $request->file('images');
        unset($validated['image']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        $WebInfo = WebInfo::findOrFail($id);

        if ($image_files) {
            try {
                foreach ($image_files as $image) {
                    $created_image_name = ImageHelper::uploadAndResizeImage($image, 'WebInfos', 600);
                    $validated['image'] = $created_image_name;
                    break; // Stop after the first image
                }
            } catch (\Exception $e) {
                return redirect('/admin/website_info')->with('error', 'Failed to upload images: ' . $e->getMessage());
            }
        }
        $WebInfo->update($validated);
        return redirect()->back()->with('success', 'Project updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $link = WebInfo::findOrFail($id); // Better to use findOrFail for automatic 404 if not found
        $link->delete();

        return redirect()->back()->with('success', 'Project deleted successfully!');
    }
}
