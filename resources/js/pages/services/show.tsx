import { Head } from '@inertiajs/react';
import Header from '@/components/header';
import React, { useEffect, useRef, useState } from 'react';
import WebLayout from '@/layouts/web-layout';

interface ServiceShowProps {
    service: {
        data: {
            id: number;
            name: string;
            description?: string;
            price: string;
            image_path: string | null;
        }
    }
}

export default function ShowService({ service }: ServiceShowProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const hasImage = !!service.data.image_path;

    return (
        <>
            <Head title="Usługi i ceny" />
            <Header>{service.data.name}</Header>
            <div className="mx-auto max-w-6xl py-32">
                <section
                    ref={sectionRef}
                    className={`
                        flex flex-col md:flex-row text-black text-xl transition-all duration-1000
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                >
                    {/* Opis */}
                    <div className={hasImage
                        ? "w-full md:w-1/2 px-6 flex items-center justify-center"
                        : "w-full px-6 flex items-center justify-center"}>
                        <div
                            className="prose max-w-none w-full"
                            dangerouslySetInnerHTML={{ __html: service.data.description ?? '' }}
                        ></div>
                    </div>

                    {/* Zdjęcie lub pusty div jeśli brak */}
                    {hasImage ? (
                        <div className="w-full md:w-1/2 px-6 flex items-center justify-center mt-12 md:mt-0">
                            <img
                                src={service.data.image_path!}
                                alt={service.data.name}
                                className="max-h-96 w-auto rounded-2xl shadow-xl object-cover border border-teal-300"
                            />
                        </div>
                    ) : null}
                </section>
            </div>
        </>
    );
}

ShowService.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
