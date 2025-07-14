import { Head } from '@inertiajs/react'
import WebLayout from '@/layouts/web-layout'
import Header from '@/components/header';
import React from 'react';

export default function About() {
    return (
        <>
            <Head title="O mnie" />
            <Header>O mnie</Header>
            <div className="mx-auto max-w-6xl py-32">
                <section className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/3">
                        <img
                            src="/img/profile.jpg"
                            alt="Zdjęcie psychologa"
                            className="rounded-xl shadow-md w-full object-cover"
                        />
                    </aside>

                    <article className="w-full md:w-2/3 text-xl text-zinc-800 space-y-6">
                        <p>
                            Jestem psychologiem w trakcie szkolenia w nurcie psychodynamicznym. Pracuję z osobami, które doświadczają trudności w relacjach, nadmiernego napięcia, niskiego poczucia własnej wartości czy trudności w rozumieniu własnych emocji.
                        </p>

                        <p>
                            W pracy psychoterapeutycznej przyglądam się nie tylko aktualnym objawom, ale też głębszym mechanizmom i wzorcom, które mogą wynikać z wcześniejszych doświadczeń.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Pomagam osobom, które:</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>czują się zablokowane emocjonalnie,</li>
                                <li>zmagają się z lękiem, poczuciem winy lub pustki,</li>
                                <li>trudno im być w kontakcie ze sobą lub innymi,</li>
                                <li>mają trudność z podejmowaniem decyzji lub nadmiernie siebie kontrolują.</li>
                            </ul>
                        </div>

                        <p>
                            Zapraszam na konsultacje!
                        </p>

                        <p>
                            Rozwijam się realizując szkolenie psychoterapeutyczne w Klinice Psychiatrii Dorosłych Szpitala Uniwersyteckiego w Krakowie. Doświadczenie zdobywałem w Poradni Zdrowia Psychicznego, szkole podstawowej oraz średniej jako psycholog szkolny, Podhalańskim Szpitalu Specjalistycznym im. Jana Pawła II.
                        </p>
                    </article>
                </section>

                <section className="mt-16 bg-zinc-50 border border-zinc-200 p-8 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-teal-600 mb-4">Moja ścieżka zawodowa i zasady pracy</h2>
                    <ul className="list-disc list-inside space-y-2 text-zinc-700 text-xl">
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
