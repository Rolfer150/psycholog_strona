import React, { useEffect, useRef } from "react";
import { Head, usePage } from '@inertiajs/react';
import WebLayout from '@/layouts/web-layout';

export default function Services() {
    const { services = { data: [] } } = usePage().props as {
        services: {
            data: {
                id: number;
                title: string;
                description?: string;
                price: string;
                image_path: string;
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
            <div className="mx-8 my-12 p-8">
                <h1 className="text-7xl font-bold text-teal-400 mb-12">Usługi i ceny</h1>

                <section
                    ref={sectionRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out border border-teal-400 p-8 text-center rounded-xl"
                        >
                            {service.image_path && (
                                <img
                                    src={service.image_path}
                                    alt={service.title}
                                    className="mb-4 mx-auto max-h-48 object-cover"
                                />
                            )}
                            <h2 className="text-2xl font-semibold">{service.title}</h2>
                            <div
                                className="text-gray-600 my-2"
                                dangerouslySetInnerHTML={{ __html: service.description ?? '' }}
                            ></div>
                            <h3 className="text-2xl text-teal-600 font-bold">Cena</h3>
                            <p className="text-xl text-teal-600 font-bold">{service.price}</p>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

Services.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
