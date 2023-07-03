<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;

class PostController extends Controller
{
    //
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'post' => 'required|string|max:255',
        ]);

        Post::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'category' => $request->category,
            'post' => $request->post,
        ]);

       return redirect()->intended(RouteServiceProvider::INDEX);
    }

    public function index(): Response
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'blogs' => Post::where('status', 'pending')->get(),
        ]);
    }
    
    public function get($id): Response
    {
        return Inertia::render('Blog/Post', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'blogItem' => Post::where('id', $id)->first(),
        ]);
    }

    public function dashboard(): Response
    {
        return Inertia::render('Dashboard', [
            'blogs' => Post::where('user_id', auth()->user()->id)->get(),
        ]);
    }
}
