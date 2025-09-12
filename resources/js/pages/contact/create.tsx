import React, { useEffect, useRef } from 'react';
import { Head, usePage } from '@inertiajs/react';
import WebLayout from '@/layouts/web-layout';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/header';

export default function Create() {
    const { url } = usePage();

    // --- Referencje do animacji ---
    const contactRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    // --- Widget ze ZnanyLekarz.pl ---
    const znanylekarzRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;
        const location = [50.2584994, 19.0241646];
        const map = L.map(mapRef.current).setView(location, 15);
        const orangeIcon = new L.Icon({
            iconUrl: 'img/marker-icon-2x-orange.png',
            shadowUrl: 'img/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        const marker = L.marker(location, {icon: orangeIcon})
            .addTo(map)
            .bindPopup('Morze Zmian\n' + 'Centrum Zdrowia\n' + 'Psychicznego');

        marker.on('mouseover', () => marker.openPopup());
        marker.on('mouseout', () => marker.closePopup());
        marker.on('click', () => {
            window.location.href = "https://www.google.com/maps/place/Staromiejska+12%2F2,+40-013+Katowice/@50.2583376,19.0229802,17.88z/data=!4m5!3m4!1s0x4716ce362c36ea85:0xfaf9e54b8d7a98b6!8m2!3d50.2584142!4d19.0241739?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D";
        });
    }, []);

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
            { threshold: 0.15 }
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

        // --------- USUŃ POPRZEDNI SKRYPT ORAZ POPRZEDNI WIDGET ---------
        const scriptId = "zl-widget-script";
        const zlAnchor = document.getElementById("zl-url");
        if (zlAnchor) {
            zlAnchor.innerHTML = "Jakub Chrobak - ZnanyLekarz.pl"; // reset linka
        }
        const oldScript = document.getElementById(scriptId);
        if (oldScript) {
            oldScript.remove();
        }

        // Zawsze dodaj nowy skrypt po montażu
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "//platform.docplanner.com/js/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            observer.disconnect();
        };
    }, [url]);



    return (
        <>
            <Head title="Kontakt" />
            <Header>Kontakt</Header>
            <div key={url} className="mx-auto max-w-6xl py-32">
                <section className="flex flex-col justify-center items-center gap-8 space-y-32 w-full">
                    <div ref={contactRef}>
                        <h2 className="text-5xl font-semibold text-center text-brown-400">Skontaktuj się ze mną poprzez:</h2>

                        {/* Dane kontaktowe z animacją */}
                        <div

                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-24 text-white min-h-[50vh]"
                        >
                            {/* Adres */}
                            <div className="p-6 rounded-xl shadow-lg bg-brown-400">
                                <h2 className="text-6xl font-semibold my-12 text-center">Adres</h2>
                                <a
                                    href="https://www.google.com/maps/place/Staromiejska+12%2F2,+40-013+Katowice/@50.2583376,19.0229802,17.88z/data=!4m5!3m4!1s0x4716ce362c36ea85:0xfaf9e54b8d7a98b6!8m2!3d50.2584142!4d19.0241739?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"
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
                                            <p className="text-2xl text-center">ul. Staromiejska 12/2, Katowice</p>
                                        </div>
                                        <span className="block w-0 group-hover:w-full bg-white transition-all duration-500 h-0.5"></span>
                                    </div>
                                </a>
                            </div>

                            {/* E-mail */}
                            <div className="p-6 rounded-xl shadow-lg bg-brown-400">
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
                            <div className="p-6 rounded-xl shadow-lg bg-brown-400">
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
                    </div>

                    {/* Widget ze ZnanyLekarz.pl z animacją fade-in */}
                    <div ref={znanylekarzRef} className="w-full md:w-2/3">
                        <h2 className="text-5xl font-semibold text-center text-brown-400">lub złóż wizytę przy pomocy platformy ZnanyLekarz.pl</h2>
                        <div className="bg-white rounded-xl shadow-lg p-6 mt-24 flex justify-center items-center">
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
