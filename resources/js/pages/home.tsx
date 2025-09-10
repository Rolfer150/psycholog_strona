import { Head, Link, usePage } from '@inertiajs/react';
import Header from '@/components/home-components/header';
import WebLayout from '@/layouts/web-layout';
import React, { useEffect, useRef } from 'react';

export default function Home() {
    const { services = { data: [] } } = usePage().props as {
        services: {
            data: {
                id: number;
                name: string;
                slug: string;
            }[];
        };
    };

    const homeServicesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = homeServicesRef.current?.querySelectorAll(".fade-in-section");
        if (!cards) return;

        const observer = new window.IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-8");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, [services]);

    useEffect(() => {
        if (!aboutRef.current) return;
        const el = aboutRef.current;
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head title="Strona główna" />

            <Header
                title="Regularne spotkania, realna zmiana"
                description="Bezpieczna przestrzeń, w której możesz porozmawiać, lepiej zrozumieć siebie i zacząć wprowadzać zmiany."
            />

            <div className="mx-auto">
                <section className="text-xl text-zinc-800 min-h-screen">
                    <div
                        ref={aboutRef}
                        className="mx-auto max-w-4xl px-6 py-32 min-h-screen text-zinc-800"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-center text-brown-500 mb-12">
                            Dzień dobry,
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed text-center">
                            <p>
                                Jeśli zmagasz się z nadmiarem stresu, czujesz się przeciążony emocjonalnie albo Twoje relacje nie układają się tak, jak byś chciał — zapraszam do kontaktu.
                            </p>
                            {/*<p>*/}
                            {/*    Nazywam się <span className="font-semibold text-zinc-900">Jakub Chrobak</span>. Jestem psychologiem w trakcie całościowego szkolenia psychoterapeutycznego w nurcie psychodynamicznym.*/}
                            {/*</p>*/}

                            {/*<p>*/}
                            {/*    Wspieram osoby zmagające się z trudnościami emocjonalnymi, problemami w relacjach czy stresem dnia codziennego. W pracy koncentruję się na głębszym zrozumieniu Twoich doświadczeń, emocji i potrzeb, aby wspólnie szukać trwałej zmiany i ulgi w cierpieniu.*/}
                            {/*</p>*/}

                            {/*<p className="text-zinc-700 italic border-l-4 border-brown-300 pl-4">*/}
                            {/*    Zapraszam do kontaktu – pierwsza rozmowa może być ważnym krokiem w stronę lepszego samopoczucia.*/}
                            {/*</p>*/}
                        </div>
                    </div>


                    <div
                        ref={homeServicesRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen mx-auto bg-white gap-x-6 gap-y-18 py-32"
                    >
                        {services.map(service => (
                            <div
                                key={service.id}
                                 className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out p-8 text-center text-black"
                            >
                                <h3 className="text-2xl font-semibold text-brown-600 text-center p-4 mt-4 h-26">{service.name}</h3>
                                <Link
                                    href={route('services.show', service.id)}
                                    className="border-brown-400 border bg-brown-400 text-white px-6 py-4 text-xl rounded-md transition-all duration-300 ease-in-out hover:bg-transparent hover:text-brown-400 hover:shadow-sm"
                                >
                                    Zobacz więcej
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
