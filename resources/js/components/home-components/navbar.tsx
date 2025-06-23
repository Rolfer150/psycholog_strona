import { Link, usePage } from '@inertiajs/react';

export default function Heading() {
    const { url } = usePage();

    const navItems = [
        { href: route('home'), path: '/', label: 'Strona główna' },
        { href: route('about'), path: '/o-mnie', label: 'O mnie' },
        { href: route('services'), path: '/uslugi-i-ceny', label: 'Usługi i ceny' },
        // { href: route('prices'), path: '/cennik', label: 'Umów wizytę' },
        { href: route('contact'), path: '/kontakt', label: 'Kontakt' },
    ];

    const isActive = (path) => url === path;

    return (
        <div className="mb-8 space-x-8 w-full p-8 flex justify-center bg-white md:text-xl ">
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
    );
}
