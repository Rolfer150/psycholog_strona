import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react'
import WebLayout from '@/layouts/web-layout'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Create() {
    useEffect(() => {
        const location = [49.4960291, 20.0063216]
        const map = L.map('map').setView(location, 15)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        const marker = L.marker(location).addTo(map)
            .bindPopup("mgr Jakub Chrobak - Psycholog")

        marker.on('mouseover', () => marker.openPopup())
        marker.on('mouseout', () => marker.closePopup())
        marker.on('click', () => {
            window.location.href = "https://www.google.com/maps/place/Krakowska+66,+Nowy+Targ"
        })
    }, [])

    return (
        <>
            <Head title="Kontakt" />

            <div className="mx-8 my-12 p-8">
                <h1 className="text-7xl font-bold text-teal-400 mb-12">Kontakt</h1>

                <section className="flex flex-col md:flex-row gap-8 mb-16">
                    {/* Dane kontaktowe */}
                    <div className="bg-teal-400 text-white p-6 rounded-xl shadow-lg w-full md:w-1/3">
                        <h2 className="text-3xl font-semibold mb-12 text-center">mgr Jakub Chrobak</h2>

                        <div className="space-y-10 text-lg">
                            <div>
                                <a
                                    href="https://www.google.com/maps/place/Krakowska+66,+34-400+Nowy+Targ/@49.4958829,20.0037306,17z/data=!3m1!4b1!4m6!3m5!1s0x4715e46681d6d6c7:0x28f52921c212259d!8m2!3d49.4958829!4d20.0063109!16s%2Fg%2F11csl4q4lr?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                                    className="group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            <svg className="mr-4 size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            <p>ul. Krakowska 66, Nowy Targ</p>
                                        </div>
                                        <span
                                            className="ml-10 block max-w-0 group-hover:max-w-full bg-white transition-all duration-500 h-0.5"
                                        ></span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="mailto:adres@email.pl" className="group" rel="noopener noreferrer">
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <svg className="mr-4 size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                            </svg>
                                            <p>adres@email.pl</p>
                                        </div>
                                        <span className="ml-10 block max-w-0 group-hover:max-w-full bg-white transition-all duration-500 h-0.5"></span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="tel:123456789" className="group" rel="noopener noreferrer">
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <svg className="mr-4 size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <p>123 456 789</p>
                                        </div>
                                        <span className="ml-10 block max-w-0 group-hover:max-w-full bg-white transition-all duration-500 h-0.5"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formularz */}
                    <form className="bg-white rounded-xl shadow-lg p-6 w-full md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-semibold text-center text-teal-400">Napisz wiadomość</h2>

                        <div>
                            <label htmlFor="name" className="block mb-1 text-zinc-700 font-medium">
                                Imię i nazwisko
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none p-2 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-zinc-700 font-medium">
                                Adres e-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none p-2 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 text-zinc-700 font-medium">
                                Wiadomość
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none p-2 rounded-md"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 border-teal-400 border hover:bg-teal-400 text-teal-400 hover:text-white text-lg hover:shadow-sm font-semibold rounded-md cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            Wyślij wiadomość
                        </button>
                    </form>
                </section>

                {/* Mapa */}
                <div id="map" className="w-full h-96 mt-12 rounded-lg shadow-md"></div>
            </div>
        </>
    )
}

Create.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>
