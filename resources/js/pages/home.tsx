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

    return (
        <>
            <Head title="Strona główna" />

            <Header
                title="Nowa strona"
                description="eee"
            />

            <div className="mx-auto py-32">
                <section className="text-xl text-zinc-800 min-h-screen">
                    <div className="text-xl text-zinc-800 space-y-12 min-h-screen mx-auto max-w-6xl">
                        <h2 className="text-5xl font-semibold text-center text-teal-400">Witam</h2>
                        <p className="text-center">Jestem psychologiem w trakcie szkolenia w nurcie psychodynamicznym. Pracuję z osobami, które doświadczają trudności w relacjach, nadmiernego napięcia, niskiego poczucia własnej wartości czy trudności w rozumieniu własnych emocji.</p>
                    </div>

                    <div
                        ref={homeServicesRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen mx-auto bg-white gap-6"
                    >
                        {services.map(service => (
                            <div
                                key={service.id}
                                 className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out p-8 text-center text-black"
                            >
                                <h3 className="text-2xl font-semibold text-teal-600 text-center p-4 mt-4 h-26">{service.name}</h3>
                                <Link
                                    href={route('services.show', service.id)}
                                    className="border-teal-400 border bg-teal-400 text-white px-6 py-4 text-xl rounded-md transition-all duration-300 ease-in-out hover:bg-transparent hover:text-teal-400 hover:shadow-sm"
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
