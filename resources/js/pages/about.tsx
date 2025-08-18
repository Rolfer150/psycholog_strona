import { Head } from '@inertiajs/react'
import WebLayout from '@/layouts/web-layout'
import Header from '@/components/header'
import React, { useEffect, useRef } from 'react'

export default function About() {
    // Refs dla animowanych sekcji
    const section1Ref = useRef<HTMLDivElement>(null)
    const section2Ref = useRef<HTMLDivElement>(null)
    const section3Ref = useRef<HTMLDivElement>(null)

    // Animacja fade-in dla każdej sekcji
    useEffect(() => {
        const refs = [section1Ref, section2Ref, section3Ref];
        const observers: IntersectionObserver[] = [];

        refs.forEach((ref) => {
            const el = ref.current;
            if (!el) return;
            el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out");

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.classList.add("opacity-100", "translate-y-0");
                        el.classList.remove("opacity-0", "translate-y-8");
                        observer.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    return (
        <>
            <Head title="O mnie" />
            <Header>O mnie</Header>

            <div className="mx-auto max-w-6xl px-6 py-24 space-y-32">
                {/* Sekcja 1 */}
                <section ref={section1Ref} className="flex flex-col items-center gap-12 md:flex-row md:items-start">
                    <aside className="w-full md:w-1/3">
                        <img
                            src="/img/profile.jpg"
                            alt="Zdjęcie psychologa"
                            className="w-full rounded-lg object-cover shadow-lg"
                        />
                    </aside>

                    <article className="w-full text-2xl leading-relaxed text-zinc-800 md:w-2/3 space-y-6">
                        <p>
                            Jestem psychologiem w trakcie szkolenia w nurcie psychodynamicznym. Pracuję z osobami, które doświadczają trudności w relacjach, nadmiernego napięcia, niskiego poczucia własnej wartości czy trudności w rozumieniu własnych emocji.
                        </p>
                        <p>
                            W pracy psychoterapeutycznej przyglądam się nie tylko aktualnym objawom, ale też głębszym mechanizmom i wzorcom, które mogą wynikać z wcześniejszych doświadczeń.
                        </p>
                    </article>
                </section>

                {/* Sekcja 2 */}
                <section ref={section2Ref} className="flex flex-col gap-12 md:flex-row md:items-start text-zinc-800">
                    <article className="w-full md:w-2/3 space-y-6 text-lg leading-relaxed">
                        <div>
                            <h2 className="mb-2 text-xl font-semibold text-brown-600">Pomagam osobom, które:</h2>
                            <ul className="list-disc list-inside space-y-1 marker:text-brown-400">
                                <li>czują się zablokowane emocjonalnie,</li>
                                <li>zmagają się z lękiem, poczuciem winy lub pustki,</li>
                                <li>trudno im być w kontakcie ze sobą lub innymi,</li>
                                <li>mają trudność z podejmowaniem decyzji lub nadmiernie siebie kontrolują.</li>
                            </ul>
                        </div>
                        <p>
                            Rozwijam się realizując szkolenie psychoterapeutyczne w Klinice Psychiatrii Dorosłych Szpitala Uniwersyteckiego w Krakowie. Doświadczenie zdobywałem w Poradni Zdrowia Psychicznego, szkole podstawowej oraz średniej jako psycholog szkolny, a także w Podhalańskim Szpitalu Specjalistycznym im. Jana Pawła II.
                        </p>
                    </article>

                    <aside className="w-full md:w-1/3 space-y-6">
                        <div>
                            <h2 className="mb-2 text-xl font-semibold text-brown-600">Znajomość języków:</h2>
                            <ul className="list-disc list-inside space-y-1 marker:text-brown-400">
                                <li>polski</li>
                                <li>angielski</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-2 text-xl font-semibold text-brown-600">Doświadczenie:</h2>
                            <ul className="list-disc list-inside space-y-1 marker:text-brown-400">
                                <li>SP4 w Nowym Targu – od 02.09.2024 (obecnie)</li>
                                <li>ZSE w Nowym Targu – od 01.02.2025 (obecnie)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-2 text-xl font-semibold text-brown-600">Edukacja:</h2>
                            <ul className="list-disc list-inside space-y-1 marker:text-brown-400">
                                <li>Magister psychologii – Uniwersytet Jagielloński</li>
                            </ul>
                        </div>
                    </aside>
                </section>

                {/* Sekcja 3 */}
                <section ref={section3Ref} className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 shadow-md md:p-10">
                    <h2 className="mb-6 text-2xl font-semibold text-brown-600">Moja ścieżka zawodowa i zasady pracy</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed text-zinc-700 marker:text-brown-400">
                        <li>Pracuję pod stałą superwizją.</li>
                        <li>Ukończyłem studia psychologiczne na Uniwersytecie Jagiellońskim.</li>
                        <li>W pracy kieruję się zasadami etyki zawodu psychologa.</li>
                        <li>Regularnie uczestniczę w szkoleniach i konferencjach z zakresu psychoterapii.</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

About.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>
