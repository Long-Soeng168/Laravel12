<?php

namespace App\Http\Controllers;

use App\Models\ApplicationInfo;
use App\Models\Banner;
use App\Models\Item;
use App\Models\ItemBrand;
use App\Models\ItemCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NokorTechController extends Controller
{
    public function index()
    {
        $topBanners = Banner::where('position_code', 'TOP_HOMEPAGE')->where('status', 'active')->get();
        $middleBanners = Banner::where('position_code', 'MIDDLE_HOMEPAGE')->where('status', 'active')->get();
        $newArrivals = Item::with('images')->where('status', 'active')->orderBy('id', 'desc')->take(12)->get();
        $brandsWithItems = ItemBrand::with([
            'items' => function ($query) {
                $query->with('images')
                    ->where('items.status', 'active') // Specify 'items' table for status
                    ->orderBy('id', 'desc')
                    ->take(12); // Limit to 12 items
            },
        ])
            ->where('item_brands.status', 'active') // Specify 'item_categories' table for status
            ->get();


        $categoriesWithItems = ItemCategory::with([
            'items' => function ($query) {
                $query->with('images')
                    ->where('items.status', 'active') // Specify 'items' table for status
                    ->orderBy('id', 'desc')
                    ->take(12); // Limit to 12 items
            },
            'children_items' => function ($query) {
                $query->with('images')
                    ->where('items.status', 'active') // Specify 'items' table for status
                    ->orderBy('id', 'desc')
                    ->take(12); // Limit to 12 child items
            }
        ])
            ->where('item_categories.status', 'active') // Specify 'item_categories' table for status
            ->whereNull('parent_code') // Only main categories (no parent)
            ->get();

        // Merge 'items' and 'children_items'
        $categoriesWithItems->each(function ($category) {
            // Merge and flatten the collections, then reset the keys
            $category->all_items = $category->items->merge($category->children_items)
                ->sortByDesc('id') // Sort by item ID
                ->take(12) // Limit to 12 items
                ->values(); // Reset the keys to be sequential

            // Optionally, remove the individual 'children_items' and 'items' keys
            unset($category->children_items);
            unset($category->items);
        });






        // The final result is in $categoriesWithItems, where all child items are now in the 'items' key


        // return $brandsWithItems;
        return Inertia::render("nokor-tech/Index", [
            'topBanners' => $topBanners,
            'middleBanners' => $middleBanners,
            'newArrivals' => $newArrivals,
            'categoriesWithItems' => $categoriesWithItems,
            'brandsWithItems' => $brandsWithItems,
        ]);
    }

    public function about()
    {
        return Inertia::render("nokor-tech/About");
    }

    public function contact()
    {
        return Inertia::render("nokor-tech/Contact");
    }

    public function blogs()
    {
        return Inertia::render("nokor-tech/blogs/Index");
    }
    public function blog_show($id)
    {
        return Inertia::render("nokor-tech/blogs/Show");
    }

    public function products()
    {
        return Inertia::render("nokor-tech/products/Index");
    }

    public function product_show($id)
    {
        return Inertia::render("nokor-tech/products/Show");
    }

    public function shopping_cart()
    {
        return Inertia::render("nokor-tech/cart/ShoppingCart");
    }
    public function checkout()
    {
        return Inertia::render("nokor-tech/cart/Checkout");
    }
    public function success()
    {
        return Inertia::render("nokor-tech/cart/Success");
    }
}
