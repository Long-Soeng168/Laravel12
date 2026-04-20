<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @php
    $ASSET_URL = 'https://news-app.redcross.org.kh/assets/images';
    $APP_URL = 'https://news-app.redcross.org.kh';

    // SEO & Meta Logic
    $cleanTitle = strip_tags($showData->title);
    $rawDesc = strip_tags($showData->long_description);
    $cleanDescription = mb_substr(preg_replace('/\s+/', ' ', $rawDesc), 0, 300);
    if (mb_strlen($rawDesc) > 300) { $cleanDescription .= '...'; }

    $mainImage = count($showData->images) > 0
    ? "{$ASSET_URL}/posts/thumb/{$showData->images[0]->image}"
    : "{$ASSET_URL}/default-logo.png";

    $shareUrl = "{$APP_URL}/share/posts/{$showData->id}";
    $appSchemeUrl = "crc-news-app://share/posts/{$showData->id}";

    @endphp

    <title>{{ $cleanTitle }}</title>
    <meta name="description" content="{{ $cleanDescription }}">
    <meta property="og:title" content="{{ $cleanTitle }}">
    <meta property="og:description" content="{{ $cleanDescription }}">
    <meta property="og:image" content="{{ $mainImage }}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="{{ $shareUrl }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $cleanTitle }}">
    <meta name="twitter:description" content="{{ $cleanDescription }}">
    <meta name="twitter:image" content="{{ $mainImage }}">


    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>
    @vite(['resources/css/app.css'])
</head>

<body class="bg-background text-foreground transition-colors duration-300">

    <div class="section-container py-8">
        {{-- Navigation / Back Home Button --}}
        <div class="mb-6">
            <a href="/" class="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-semibold rounded-full border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 active:scale-95 group">
                <div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 transition-colors group-hover:-translate-x-0.5 text-primary transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </div>
                <span class="tracking-tight">Back to Home</span>
            </a>
        </div>

        <div class="relative z-10 mx-auto flex lg:border-0">
            <main class="prose dark:prose-invert prose-h2:mb-0.5 prose-h3:mb-0.5 prose-p:m-0 prose-ul:m-0 w-full max-w-none">
                <div>
                    {{-- 1. Main Title --}}
                    <h1 class="text-primary mt-4 text-2xl font-bold leading-tight md:text-3xl">
                        {!! $showData->title !!}
                    </h1>

                    {{-- 2. Professional Share Bar --}}
                    <div class="border-border my-6 flex flex-wrap items-center gap-3 border-y py-4">
                        <span class="text-muted-foreground flex items-center gap-2 text-base font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                <polyline points="16 6 12 2 8 6" />
                                <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                            {{ __('Share') }}:
                        </span>

                        {{-- Telegram --}}
                        <a href="https://t.me/share/url?url={{ urlencode($shareUrl) }}&text={{ urlencode($cleanTitle) }}" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-[#24A1DE] text-white transition-transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 mr-0.5">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </a>

                        {{-- Facebook --}}
                        <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode($shareUrl) }}" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>

                        {{-- X --}}
                        <a href="https://twitter.com/intent/tweet?url={{ urlencode($shareUrl) }}&text={{ urlencode($cleanTitle) }}" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110 dark:bg-slate-800">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {{-- Copy Link --}}
                        <button onclick="copyToClipboard('{{ $shareUrl }}', this)" class="flex h-10 items-center gap-2 rounded-full px-4 text-base font-bold transition-all active:scale-95 bg-muted text-foreground hover:bg-slate-200 dark:hover:bg-slate-800">
                            <svg id="linkIcon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                            <span id="copyText">{{ __('Copy Link') }}</span>
                        </button>
                    </div>

                    {{-- 3. Article Body --}}
                    <div class="prose dark:prose-invert prose-h2:mb-0.5 prose-h3:mb-0.5 prose-p:m-0 prose-ul:m-0 w-full max-w-none">
                        {!! $showData->long_description !!}
                    </div>
                </div>
            </main>
        </div>

        {{-- 4. Gallery --}}
        @if(count($showData->images) > 0)
        <div class="mt-12 pt-8 border-t border-border">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                <span class="w-1.5 h-6 bg-primary rounded-full"></span>
                {{ __('Images') }}
            </h3>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                @foreach($showData->images as $img)
                <div class="overflow-hidden rounded-2xl border border-border shadow-sm group">
                    <img src="{{ $ASSET_URL }}/posts/{{ $img->image }}" class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" alt="Article image">
                </div>
                @endforeach
            </div>
        </div>
        @endif
    </div>

    <script>
        // Feature: Open App via Scheme
        function openApp(schemeUrl) {
            const start = Date.now();

            // Try to open the custom scheme
            window.location.href = schemeUrl;

            // Log to console immediately
            console.log("Attempting to open app: " + schemeUrl);

            // Wait 2 seconds. If the user is still on this page, the app probably isn't installed.
            setTimeout(() => {
                if (Date.now() - start < 2500) {
                    console.log("App not detected. User stayed on webpage.");
                    // You could show an alert or redirect to App Store here
                    // alert("App not found. Please install CRC News app.");
                }
            }, 2000);
        }

        window.onload = function() {
            // Trigger all
            openApp('{{ $appSchemeUrl }}');

            // Target only ios and android
            // if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            //     console.log("Mobile detected, auto-triggering app check...");
            //     openApp('{{ $appSchemeUrl }}');
            // }
        };

        function copyToClipboard(text, btn) {
            navigator.clipboard.writeText(text).then(() => {
                const textSpan = btn.querySelector('#copyText');
                const originalText = textSpan.innerText;

                btn.classList.remove('bg-muted', 'text-foreground');
                btn.classList.add('bg-green-600', 'text-white');
                textSpan.innerText = "{{ __('Copied') }}";

                setTimeout(() => {
                    btn.classList.add('bg-muted', 'text-foreground');
                    btn.classList.remove('bg-green-600', 'text-white');
                    textSpan.innerText = originalText;
                }, 2000);
            });
        }
    </script>
    {{-- Open in App Banner --}}
    {{-- Test Buttons Container --}}
    <div class="mb-6 section-container hidden rounded-2xl bg-slate-50 p-6 border border-slate-200">
        <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Deep Link Testing</p>

        <div class="flex flex-col sm:flex-row gap-4">
            {{-- Button 1: Normal Web Link (App Links / Universal Links) --}}
            <a href="{{ $shareUrl }}" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Test HTTPS Link
            </a>

            {{-- Button 2: Custom URI Scheme (crc-news-app://) --}}
            <a href="crc-news-app://share/posts/{{ $showData->id }}" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                </svg>
                Test Scheme Link
            </a>
        </div>

        <p class="mt-3 text-xs text-muted-foreground">
            Note: The Black button (Scheme) usually works even if the server verification fails.
        </p>
    </div>
</body>

</html>