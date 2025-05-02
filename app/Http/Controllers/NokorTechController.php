<?php

namespace App\Http\Controllers;

use App\Models\ApplicationInfo;
use App\Models\Banner;
use App\Models\Item;
use App\Models\ItemBrand;
use App\Models\ItemCategory;
use App\Models\Link;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NokorTechController extends Controller
{
    public function index()
    {
        $topBanners = Banner::where('position_code', 'TOP_HOMEPAGE')->orderBy('order_index')->where('status', 'active')->get();
        $middleBanners = Banner::where('position_code', 'MIDDLE_HOMEPAGE')->orderBy('order_index')->where('status', 'active')->get();

        $posts = Post::where('status', 'active')->with('images')->orderBy('id', 'desc')->get();


        $newArrivals = Item::with('images')->where('status', 'active')->orderBy('id', 'desc')->take(12)->get();
        $brandsWithItems = ItemBrand::with([
            'items' => function ($query) {
                $query->with('images')
                    ->where('items.status', 'active') // Specify 'items' table for status
                    ->orderBy('id', 'desc')
                    ->take(12); // Limit to 12 items
            },
        ])
            ->orderBy('order_index')
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
            ->orderBy('order_index')
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
            'posts' => $posts,
            'newArrivals' => $newArrivals,
            'categoriesWithItems' => $categoriesWithItems,
            'brandsWithItems' => $brandsWithItems,
        ]);
    }

    public function about()
    {
        $aboutPages = Page::with('images')->where('position_code', 'ABOUT')->where('status', 'active')->orderBy('order_index')->get();
        // return $aboutPages;
        return Inertia::render("nokor-tech/About", [
            "aboutPages" => $aboutPages
        ]);
    }

    public function contact()
    {
        $contactPage = Page::with('images')->where('position_code', 'CONTACT')->where('status', 'active')->orderBy('order_index')->first();

        return Inertia::render("nokor-tech/Contact", [
            "contactPage" => $contactPage
        ]);
    }

    public function blogs(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');

        $query = Post::query();

        $query->with('created_by', 'updated_by', 'images', 'category', 'source_detail');

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%");
            });
        }

        $blogsData = $query->paginate(perPage: 10)->onEachSide(1);
        return Inertia::render('nokor-tech/blogs/Index', [
            'blogsData' => $blogsData,
        ]);
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
