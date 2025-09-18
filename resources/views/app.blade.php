<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- SEO -->
        <title>Psycholog Jakub Chrobak – Psychoterapia i konsultacje psychologiczne</title>
        <meta name="description" content="Psycholog Jakub Chrobak – konsultacje psychologiczne i psychoterapia w nurcie psychodynamicznym. Spotkania stacjonarne (Nowy Targ, Myślenice, Katowice) oraz online. Szybka pomoc psychologiczna, wsparcie w kryzysie, konsultacje w języku polskim i angielskim." />
        <meta name="keywords" content="psycholog, psychoterapia, Nowy Targ, Myślenice, Katowice, Jakub Chrobak, konsultacja psychologiczna, konsultacja online, wsparcie psychologiczne, kryzys, szybka konsultacja, Psychological consultation in English, nurt psychodynamiczny" />
        <meta name="author" content="Jakub Chrobak" />

        <!-- Open Graph (Facebook, LinkedIn) -->
        <meta property="og:title" content="Psycholog Jakub Chrobak – Psychoterapia i konsultacje psychologiczne" />
        <meta property="og:description" content="Psychoterapia w nurcie psychodynamicznym, konsultacje psychologiczne stacjonarnie (Nowy Targ, Myślenice, Katowice) i online. Wsparcie w kryzysie, szybka pomoc oraz konsultacje w języku angielskim." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twojadomena.pl" />
        <meta property="og:image" content="https://twojadomena.pl/images/og-image.jpg" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psycholog Jakub Chrobak – Psychoterapia i konsultacje psychologiczne" />
        <meta name="twitter:description" content="Psychoterapia w nurcie psychodynamicznym, konsultacje psychologiczne online i stacjonarnie (Nowy Targ, Myślenice, Katowice)." />
        <meta name="twitter:image" content="https://twojadomena.pl/images/og-image.jpg" />

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>



        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="{{ asset('img/logo.png') }}">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
{{--        <link href="https://fonts.bunny.net/css?family=alegreya-sans:300,500,700,800" rel="stylesheet" />--}}

        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
