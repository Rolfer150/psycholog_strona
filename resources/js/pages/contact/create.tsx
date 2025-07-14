import React, { useEffect, useRef } from 'react';
import { Head, useForm } from '@inertiajs/react';
import WebLayout from '@/layouts/web-layout';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/header';

export default function Create() {
    // --- Referencje do animacji ---
    const contactRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    // --- Widget ze ZnanyLekarz.pl ---
    const znanylekarzRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;
        const location = [49.4960291, 20.0063216];
        const map = L.map(mapRef.current).setView(location, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        const marker = L.marker(location).addTo(map)
            .bindPopup("mgr Jakub Chrobak - Psycholog");

        marker.on('mouseover', () => marker.openPopup());
        marker.on('mouseout', () => marker.closePopup());
        marker.on('click', () => {
            window.location.href = "https://www.google.com/maps/place/Krakowska+66,+Nowy+Targ";
        });
    }, []);

    // --- Formularz (Inertia) ---
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        text: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('messages.store'), {
            onSuccess: () => reset(),
        });
    };

    // --- Animacja kontaktu ---
    useEffect(() => {
        if (!contactRef.current) return;
        const el = contactRef.current;
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // --- Animacja formularza ---
    useEffect(() => {
        if (!formRef.current) return;
        const el = formRef.current;
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // --- Animacja mapy ---
    useEffect(() => {
        if (!mapRef.current) return;
        const el = mapRef.current;
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // --- Widget ZnanyLekarz.pl ---
    useEffect(() => {
        const el = znanylekarzRef.current;
        if (!el) return;

        // animacja startowa
        el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out");

        // IntersectionObserver do animacji
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("opacity-100", "translate-y-0");
                    el.classList.remove("opacity-0", "translate-y-8");
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);

        // dodanie widgetu jeśli jeszcze nie istnieje
        const scriptId = "zl-widget-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "//platform.docplanner.com/js/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            observer.disconnect();
        };
    }, []);



    return (
        <>
            <Head title="Kontakt" />
            <Header>Kontakt</Header>
            <div className="mx-auto max-w-6xl py-32">
                <section className="flex flex-col justify-center items-center gap-8 space-y-32 w-full">
                    {/* Dane kontaktowe z animacją */}
                    <div
                        ref={contactRef}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full text-white min-h-[50vh]"
                    >
                        {/* Adres */}
                        <div className="p-6 rounded-xl shadow-lg bg-teal-400">
                            <h2 className="text-6xl font-semibold my-12 text-center">Adres</h2>
                            <a
                                href="https://www.google.com/maps/place/Krakowska+66,+34-400+Nowy+Targ"
                                className="group block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="grid place-items-center">
                                    <div>
                                        <svg className="size-12 w-full mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p className="text-2xl">ul. Krakowska 66, Nowy Targ</p>
                                    </div>
                                    <span className="block w-0 group-hover:w-full bg-white transition-all duration-500 h-0.5"></span>
                                </div>
                            </a>
                        </div>

                        {/* E-mail */}
                        <div className="p-6 rounded-xl shadow-lg bg-teal-400">
                            <h2 className="text-6xl font-semibold my-12 text-center">E-mail</h2>
                            <a href="mailto:adres@email.pl" className="group block" rel="noopener noreferrer">
                                <div className="grid place-items-center">
                                    <div>
                                        <svg className="size-12 w-full mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                        <p className="text-2xl">adres@email.pl</p>
                                    </div>
                                    <span className="block w-0 group-hover:w-full bg-white transition-all duration-500 h-0.5"></span>
                                </div>
                            </a>
                        </div>

                        {/* Telefon */}
                        <div className="p-6 rounded-xl shadow-lg bg-teal-400">
                            <h2 className="text-6xl font-semibold my-12 text-center">Telefon</h2>
                            <a href="tel:123456789" className="group block" rel="noopener noreferrer">
                                <div className="grid place-items-center">
                                    <div>
                                        <svg className="size-12 w-full mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                        <p className="text-2xl">123 456 789</p>
                                    </div>
                                    <span className="block w-0 group-hover:w-full bg-white transition-all duration-500 h-0.5"></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Widget ze ZnanyLekarz.pl z animacją fade-in */}
                    <div ref={znanylekarzRef} className="w-full md:w-2/3">
                        <h2 className="text-5xl font-semibold text-center text-teal-400">Złóż wizytę przez platformę ZnanyLekarz.pl</h2>
                        <div className="bg-white rounded-xl shadow-lg p-6 mt-12 flex justify-center items-center">
                            <a
                                id="zl-url"
                                className="zl-url"
                                href="https://www.znanylekarz.pl/jakub-chrobak/psycholog/nowy-targ"
                                rel="nofollow"
                                data-zlw-doctor="jakub-chrobak"
                                data-zlw-type="big_with_calendar"
                                data-zlw-opinion="false"
                                data-zlw-hide-branding="true"
                                data-zlw-saas-only="true"
                                data-zlw-a11y-title="Widget umówienia wizyty lekarskiej"
                            >
                                Jakub Chrobak - ZnanyLekarz.pl
                            </a>
                        </div>
                    </div>

                    {/* Formularz z animacją fade-in */}
                    <div ref={formRef} className="w-full md:w-2/3">
                        <h2 className="text-5xl font-semibold text-center text-teal-400">lub</h2>
                        <h2 className="text-5xl font-semibold text-center text-teal-400">napisz wiadomość</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-xl shadow-lg p-6 mt-12 space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block mb-1 text-zinc-700 font-medium">
                                    Imię i nazwisko
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none p-2 rounded-md"
                                    required
                                />
                                {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-zinc-700 font-medium">
                                    Adres e-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none p-2 rounded-md"
                                    required
                                />
                                {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-1 text-zinc-700 font-medium">
                                    Wiadomość
                                </label>
                                <textarea
                                    id="text"
                                    name="text"
                                    rows={5}
                                    value={data.text}
                                    onChange={e => setData('text', e.target.value)}
                                    className="w-full border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none p-2 rounded-md"
                                    required
                                />
                                {errors.text && <div className="text-red-600 text-sm">{errors.text}</div>}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-3 border-teal-400 border bg-teal-400 text-white text-lg font-semibold rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent hover:text-teal-400 hover:shadow-sm"
                            >
                                {processing ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                            </button>
                        </form>
                    </div>

                    {/* Mapa z animacją */}
                    <div
                        ref={mapRef}
                        id="map"
                        className="w-full h-96 rounded-lg shadow-md mb-32"
                    ></div>
                </section>
            </div>
        </>
    );
}

Create.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
