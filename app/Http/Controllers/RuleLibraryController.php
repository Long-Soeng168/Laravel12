<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RuleLibraryController extends Controller
{
    public function index(){
        return Inertia::render('rule-library/Index');
    }
    public function collections(){
        return Inertia::render('rule-library/Collection');
    }

     public function detail($id){
        return Inertia::render('rule-library/Detail',[
            'id' => $id,
        ]);
    }
    
}
