<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NokorTechController extends Controller
{
    public function index(){
        return Inertia::render("nokor-tech/Index");
    }
}
