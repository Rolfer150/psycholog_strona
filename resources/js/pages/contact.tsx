import { Head } from '@inertiajs/react'
import { useEffect } from 'react'
import WebLayout from '@/layouts/web-layout'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Contact() {
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
            window.location.href = "https://www.google.com/maps/place/Krakowska+66,+34-400+Nowy+Targ/@49.4958829,20.0037306,17z/data=!3m1!4b1!4m6!3m5!1s0x4715e46681d6d6c7:0x28f52921c212259d!8m2!3d49.4958829!4d20.0063109!16s%2Fg%2F11csl4q4lr?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
        })
    }, [])

    return (
        <>
            <Head title="Kontakt" />

            <div className="mx-8 my-12 p-8">
                <h1 className="text-7xl font-bold text-teal-400 mb-12">Kontakt</h1>

                <section className="flex flex-col md:flex-row space-x-8 bg-teal-400 text-white">
                    <div className="w-full md:w-2/5 p-4 ml-4 my-8 text-2xl text-center">
                        <p className="text-3xl">mgr Jakub Chrobak</p>

                        <div className="flex items-center mt-8">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="size-6 mr-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            <address className="flex items-center">ul. Krakowska 66, Nowy Targ</address>
                        </div>

                        <div className="flex items-center mt-8">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="size-6 mr-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                            </span>
                            <p className="flex items-center">adres@email.pl</p>
                        </div>

                        <div className="flex items-center mt-8">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="size-6 mr-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </span>
                            <p className="flex items-center">123 456 789</p>
                        </div>
                    </div>

                    <form className="space-y-8 w-full px-4 pt-4 md:w-3/5 bg-white text-black">
                        <h2 className="text-center text-3xl">Napisz wiadomość</h2>

                        <div className="flex items-center">
                            <label htmlFor="name" className="block font-medium text-zinc-700 w-1/5 required_field">
                                Imię i nazwisko
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-4/5 border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="email" className="block font-medium text-zinc-700 w-1/5 required_field">
                                Adres e-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="block w-4/5 border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="message" className="block font-medium text-zinc-700 w-1/5 required_field">
                                Wiadomość
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="block w-4/5 border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 focus:outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-teal-400 hover:bg-teal-600 text-white text-xl font-semibold transition duration-200"
                        >
                            Zarezerwuj wizytę
                        </button>
                    </form>
                </section>
                <div id="map" className="w-full h-120 mt-8 rounded-lg shadow-md"></div>
            </div>
        </>
    )
}

Contact.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>
