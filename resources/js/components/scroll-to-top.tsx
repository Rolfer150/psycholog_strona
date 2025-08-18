import React, { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 200);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50 border-brown-400 border bg-brown-400 text-white rounded-full p-3 transition-all
                hover:bg-white hover:text-brown-400 hover:shadow-sm active:scale-95 cursor-pointer
                ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
            aria-label="Przewiń do góry"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7-7-7 7" />
            </svg>
        </button>
    );
}
