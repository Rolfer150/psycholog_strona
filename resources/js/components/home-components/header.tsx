import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

function AnimateOnScroll({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={clsx(
                'transition-all duration-2000 ease-out transform opacity-0',
                visible && 'opacity-100'
            )}
        >
            {children}
        </div>
    );
}

export default function Header({ title, description }: { title: string; description?: string }) {

    return (
        <AnimateOnScroll>
            <header className="relative flex flex-col-reverse items-center justify-center text-brown-400 lg:flex-row bg-[#faf6ef] overflow-hidden min-h-screen mx-auto px-6 py-8 lg:py-0">
                <div className="w-full lg:w-2/3 flex flex-col mt-[25%] mb-[75%] md:mb-[50%] lg:mt-0 lg:mb-0">
                    <h1 className="mb-6 text-6xl font-extrabold leading-tight md:text-8xl lg:leading-tight text-center lg:text-left">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-2xl md:text-4xl font-light lg:leading-snug opacity-90 drop-shadow-sm text-center lg:text-left">
                            {description}
                        </p>
                    )}
                </div>

                {/* Dekoracyjne zdjęcie */}
                <div className="w-full min-h-screen lg:w-1/3 flex justify-center items-center">
                    <div className="aspect-[4/5] w-full max-w-md">
                        <img
                            src="/img/logo.png"
                            alt="Zdjęcie psychologa"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </header>
        </AnimateOnScroll>
    );
}
