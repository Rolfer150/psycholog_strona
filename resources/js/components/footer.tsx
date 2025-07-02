import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-zinc-700 text-zinc-100 p-4">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center place-items-center">
                {/* Kolumna 1: Imię i zawód */}
                <Link
                    href={route('home')}
                    className="hover:text-zinc-300 transition-colors duration-100 ease-in-out text-center"
                >
                    <h2 className="text-2xl">Jakub Chrobak</h2>
                    <h2 className="text-2xl">Psycholog</h2>
                </Link>

                {/* Kolumna 2: Adres */}
                <address className="flex items-start justify-center not-italic">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 mr-4" fill="none"
                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <a
                        href="https://www.google.com/maps/place/Krakowska+66,+34-400+Nowy+Targ/@49.4958829,20.0037306,17z/data=!3m1!4b1!4m6!3m5!1s0x4715e46681d6d6c7:0x28f52921c212259d!8m2!3d49.4958829!4d20.0063109!16s%2Fg%2F11csl4q4lr?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-300 transition-colors duration-100 ease-in-out text-left"
                    >
                        Nowy Targ,<br />ul. Krakowska 66
                    </a>
                </address>

                {/* Kolumna 3: Telefon */}
                <div className="flex items-start justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 mr-4" fill="none"
                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <a
                        href="tel:123456789"
                        className="hover:text-zinc-300 transition-colors duration-100 ease-in-out"
                    >
                        123 456 789
                    </a>
                </div>
            </div>

            <p className="text-center text-sm p-8 mt-4 border-t border-zinc-600">
                © 2025 mgr Jakub Chrobak Psycholog. Wszelkie prawa zastrzeżone.
            </p>
        </footer>
    );
}
