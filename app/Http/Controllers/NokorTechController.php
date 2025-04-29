<?php

namespace App\Http\Controllers;

use App\Models\ApplicationInfo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NokorTechController extends Controller
{
    public function index()
    { 
        return Inertia::render("nokor-tech/Index");
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
