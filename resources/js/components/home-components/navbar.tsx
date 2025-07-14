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
        <nav className="sticky top-0 z-50 bg-white shadow-sm w-full">
            {/* Header z nazwą i hamburgerem */}
            <div className="flex items-center justify-between md:hidden px-6 py-4 h-20">
                <span className="text-2xl font-bold text-teal-500">Jakub Chrobak Psycholog</span>
                <button
                    className="flex flex-col justify-center items-center group"
                    onClick={() => setOpen(!open)}
                    aria-label="Otwórz menu"
                >
                    {open ? <X size={32} className="text-teal-500" /> : <Menu size={32} className="text-teal-500" />}
                </button>
            </div>

            {/* Mobile Drawer + przezroczyste tło na klik */}
            <div
                className={`fixed inset-0 z-40 md:hidden`}
                style={{ pointerEvents: open ? 'auto' : 'none' }}
                onClick={handleBackdropClick}
            >
                <aside
                    className={`
                        fixed left-0 top-20 min-h-screen w-3/4 max-w-xs bg-white z-50 shadow-lg
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
                                className={`group transition duration-300 ${
                                    isActive(path) ? 'text-teal-400' : 'text-zinc-800'
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                                <span
                                    className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${
                                        isActive(path) ? 'bg-teal-400' : 'bg-zinc-700'
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
                        className={`group transition duration-300 ${
                            isActive(path) ? 'text-teal-400' : 'text-zinc-800'
                        }`}
                    >
                        {label}
                        <span
                            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${
                                isActive(path) ? 'bg-teal-400' : 'bg-zinc-700'
                            }`}
                        ></span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
