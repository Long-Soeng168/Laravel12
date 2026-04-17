<?php

namespace App\Http\Middleware;

use App\Models\ApplicationInfo;
use App\Models\Heading;
use App\Models\Link;
use App\Models\Page;
use App\Models\PostCategory;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
                'roles' => $request->user() ? $request->user()->getRoleNames() : [],
                'permissions' => $request->user() ? $request->user()->getAllPermissions()->pluck('name') : [],
            ],
            'ziggy' => fn(): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],

            'application_info' => ApplicationInfo::first(),
            'endless_text_motion' => Heading::where('status', 'active')->orderBy('id', 'desc')->first(),
            'links' => Link::orderBy('order_index')->where('status', 'active')->get(),
            'post_categories' => PostCategory::orderBy('order_index')->where('status', 'active')->get(),
            'page_links' => Page::orderBy('order_index')->select('title', 'position_code', 'id')->where('status', 'active')->get(),

            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
                'warning' => session('warning'),
            ],
        ];
    }
}
