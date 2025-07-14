import React, { useEffect, useRef } from "react";
import { Head, Link, usePage } from '@inertiajs/react';
import WebLayout from '@/layouts/web-layout';
import Header from '@/components/header';

export default function Services() {
    const { services = { data: [] } } = usePage().props as {
        services: {
            data: {
                id: number;
                name: string;
                short_short_description?: string;
                price: string;
            }[];
        };
    };

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll(".fade-in-section");
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
            <Head title="Usługi i ceny" />
            <Header>Usługi i ceny</Header>
            <div className="mx-auto max-w-6xl py-32">
                <section
                    ref={sectionRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white p-8 text-center text-black rounded-xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold h-16">{service.name}</h2>
                            <div
                                className="text-zinc-600 my-2 md:h-36"
                                dangerouslySetInnerHTML={{ __html: service.short_description ?? '' }}
                            ></div>
                            <h3 className="text-2xl text-teal-400 font-bold">Cena</h3>
                            <p className="text-xl text-teal-400 font-bold mb-6">{service.price}</p>

                            <Link
                                href={route('services.show', service.id)}
                                className="border-teal-400 border bg-teal-400 text-white px-6 py-4 text-xl rounded-md transition-all duration-300 ease-in-out hover:bg-transparent hover:text-teal-400 hover:shadow-sm"
                            >
                                Zobacz więcej
                            </Link>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

Services.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
