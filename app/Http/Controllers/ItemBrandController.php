<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Models\ItemBrand;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class ItemBrandController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:item view', only: ['index', 'show']),
            new Middleware('permission:item create', only: ['create', 'store']),
            new Middleware('permission:item update', only: ['edit', 'update', 'update_status']),
            new Middleware('permission:item delete', only: ['destroy', 'destroy_image']),
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');

        $query = ItemBrand::query();

        if ($search) {
            $query->where(function ($subQuery) use ($search) {
                $subQuery->where('name', 'LIKE', "%{$search}%")
                         ->orWhere('code', 'LIKE', "%{$search}%")
                         ->orWhere('name_kh', 'LIKE', "%{$search}%");
            });
        }


        $query->orderBy($sortBy, $sortDirection);

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/item_brands/Index', [
            'tableData' => $tableData,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/item_brands/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255|unique:item_brands,code',
            'name' => 'nullable|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $validated['created_by'] = $request->user()->id;
        $validated['updated_by'] = $request->user()->id;

        $image_file = $request->file('image');
        unset($validated['image']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        if ($image_file) {
            try {
                $created_image_name = ImageHelper::uploadAndResizeImage($image_file, 'assets/images/item_brands', 600);
                $validated['image'] = $created_image_name;
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload image: ' . $e->getMessage());
            }
        }

        ItemBrand::create($validated);

        return redirect()->route('item_brands.index')->with('success', 'Item Brand created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(ItemBrand $itemBrand)
    {
        return Inertia::render('admin/item_brands/Show', [
            'itemBrand' => $itemBrand
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ItemBrand $itemBrand)
    {
        return Inertia::render('admin/item_brands/Edit', [
            'itemBrand' => $itemBrand
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ItemBrand $itemBrand)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255|unique:item_brands,code,' . $itemBrand->id,
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $validated['updated_by'] = $request->user()->id;

        $image_file = $request->file('image');
        unset($validated['image']);

        foreach ($validated as $key => $value) {
            if ($value === null || $value === '') {
                unset($validated[$key]);
            }
        }

        if ($image_file) {
            try {
                $created_image_name = ImageHelper::uploadAndResizeImage($image_file, 'assets/images/item_brands', 600);
                $validated['image'] = $created_image_name;

                if ($itemBrand->image && $created_image_name) {
                    ImageHelper::deleteImage($itemBrand->image, 'assets/images/item_brands');
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload image: ' . $e->getMessage());
            }
        }

        $itemBrand->update($validated);

        return redirect()->route('item_brands.index')->with('success', 'Item Brand updated successfully!');
    }

    public function update_status(Request $request, ItemBrand $item_brand)
    {
        $request->validate([
            'status' => 'required|string|in:active,inactive',
        ]);
        $item_brand->update([
            'status' => $request->status,
        ]);

        return redirect()->back()->with('success', 'Status updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ItemBrand $itemBrand)
    {
        // Delete image if exists
        if ($itemBrand->image) {
            ImageHelper::deleteImage($itemBrand->image, 'assets/images/item_brands');
        }

        $itemBrand->delete();

        return redirect()->route('item_brands.index')->with('success', 'Item Brand deleted successfully!');//
    }
}
