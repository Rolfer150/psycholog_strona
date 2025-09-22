import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-neutral-500 p-4 text-neutral-100">
            <div className="my-16 grid grid-cols-1 place-items-center gap-6 p-8 text-center md:grid-cols-3">
                {/* Kolumna 1: Imię i zawód */}
                <Link href={route('home')} className="text-center transition-colors duration-100 ease-in-out hover:text-zinc-300">
                    <h2 className="text-2xl">Jakub Chrobak</h2>
                    <h2 className="text-2xl">Psycholog</h2>
                </Link>

                {/* Kolumna 2: Adres E-Mail */}
                <address className="flex items-start justify-center not-italic">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4 size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                    <a
                        href="mailto:kubachrobakemail@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left transition-colors duration-100 ease-in-out hover:text-zinc-300"
                    >
                        kubachrobakemail@gmail.com
                    </a>
                </address>

                {/* Kolumna 3: Telefon */}
                <div className="flex items-start justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="mr-4 size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                    </svg>

                    <a href="tel:501458987" className="transition-colors duration-100 ease-in-out hover:text-zinc-300">
                        501 458 987
                    </a>
                </div>
            </div>

            <p className="border-t border-neutral-400 p-8 pt-12 text-center text-sm">
                © 2025 mgr Jakub Chrobak Psycholog. Wszelkie prawa zastrzeżone.
            </p>
        </footer>
    );
}
