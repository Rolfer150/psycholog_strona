import { Link, usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Heading() {
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        const handleResize = () => {
            if (window.innerWidth >= 768) setOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('resize', handleResize);
        };
    }, [open]);

    const navItems = [
        { href: route('home'), path: '/', label: 'Strona główna' },
        { href: route('about'), path: '/o-mnie', label: 'O mnie' },
        { href: route('services.public'), path: '/uslugi-i-ceny', label: 'Usługi i ceny' },
        { href: route('messages.create'), path: '/kontakt', label: 'Kontakt' },
    ];

    const isActive = (path: string) => url === path;

    // Zamknięcie po kliknięciu poza drawerem
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-neutral-500 shadow-sm w-full">
            {/* Header z nazwą i hamburgerem */}
            <div className="flex items-center justify-between md:hidden px-8 py-4 h-20">
                <button
                    className="flex flex-col justify-center items-center group"
                    onClick={() => setOpen(!open)}
                    aria-label="Otwórz menu"
                >
                    {open ? <X size={32} className="text-neutral-100" /> : <Menu size={32} className="text-neutral-100" />}
                </button>
                <span className="text-2xl font-bold text-neutral-100">Jakub Chrobak Psycholog</span>
            </div>

            {/* Mobile Drawer + przezroczyste tło na klik */}
            <div
                className={`fixed inset-0 z-40 md:hidden`}
                style={{ pointerEvents: open ? 'auto' : 'none' }}
                onClick={handleBackdropClick}
            >
                <aside
                    className={`
                        fixed left-0 top-20 min-h-screen w-3/4 max-w-xs bg-white border-r-2 border-[#FDFAF5] z-50 shadow-sm
                        transition-transform duration-300 ease-in-out
                        ${open ? 'translate-x-0' : '-translate-x-full'}
                        md:hidden
                    `}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex flex-col space-y-8 mt-8 px-8 text-2xl">
                        {navItems.map(({ href, path, label }) => (
                            <Link
                                key={path}
                                href={href}
                                className="group transition duration-300 text-brown-700"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                                <span
                                    className={`block group-hover:max-w-full h-0.5 bg-brown-600 ${
                                        !isActive(path) && 'max-w-0 transition-all duration-500'
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex justify-center space-x-10 md:space-x-16 w-full p-8 md:p-12 text-2xl">
                {navItems.map(({ href, path, label }) => (
                    <Link
                        key={path}
                        href={href}
                        className="group transition duration-300 text-neutral-100"
                    >
                        {label}
                        <span
                            className={`block group-hover:max-w-full h-0.5 bg-neutral-100 ${
                                !isActive(path) && 'max-w-0 transition-all duration-500'
                            }`}
                        ></span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
