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
                title="Dzień dobry,"
                description="Zapraszam na konsultacje psychologiczne, pomoc psychologiczną, psychoterapię."
            />

            <div className="mx-auto">
                <section
                    ref={aboutRef}
                    className="mx-auto max-w-4xl px-6 py-32 min-h-screen text-2xl lg:text-4xl leading-relaxed text-center text-brown-600 min-h-screen">
                    <p>
                        Jeśli zmagasz się z nadmiarem stresu, czujesz się przeciążony emocjonalnie albo Twoje relacje nie układają się tak, jak byś chciał — zapraszam do kontaktu.
                    </p>
                </section>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
