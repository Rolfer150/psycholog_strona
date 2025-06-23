import { Head } from '@inertiajs/react'
import WebLayout from '@/layouts/web-layout'

export default function About() {
    return (
        <>
            <Head title="O mnie" />

            <div className="mx-8 my-12 p-8">
                <h1 className="text-7xl font-bold text-teal-400 mb-12">O mnie</h1>
                <p className="text-zinc-700">
                    Tu możesz opisać swoją praktykę, doświadczenie, podejście terapeutyczne itd.
                </p>
                <section className='flex flex-col md:flex-row mt-8 space-x-8'>
                    <aside className='p-4 w-full md:w-1/3'>
                        <img src='https://media.istockphoto.com/id/1200677760/pl/zdj%C4%99cie/portret-przystojnego-u%C5%9Bmiechni%C4%99tego-m%C5%82odego-m%C4%99%C5%BCczyzny-ze-skrzy%C5%BCowanymi-ramionami.jpg?s=1024x1024&w=is&k=20&c=FCcIOGOWHIRrHDXI3jgUHG6uGJ93InJrPmncCbBm2Fo=' />
                    </aside>
                    <article className='p-4 w-full md:w-2/3'>
                        <p className='text-justify'>
                            Jestem psychologiem w trakcie szkolenia w nurcie psychodynamicznym. Pracuję z osobami, które doświadczają trudności w relacjach, nadmiernego napięcia, niskiego poczucia własnej wartości czy trudności w rozumieniu własnych emocji.
                            <br/><br/>
                            W pracy psychoterapeutycznej przyglądam się nie tylko aktualnym objawom, ale też głębszym mechanizmom i wzorcom, które mogą wynikać z wcześniejszych doświadczeń.
                            <br/><br/>
                        </p>
                        Pomagam osobom, które:
                        <ul className="list-disc list-inside space-y-1 text-zinc-800">
                            <li>czują się zablokowane emocjonalnie,</li>
                            <li>zmagają się z lękiem, poczuciem winy lub pustki,</li>
                            <li>trudno im być w kontakcie ze sobą lub innymi,</li>
                            <li>mają trudność z podejmowaniem decyzji lub nadmiernie siebie kontrolują.</li>
                        </ul>
                        <br/><br/>
                        <p className='text-justify'>
                            Zapraszam na konsultacje!
                            <br/><br/>
                            Rozwijam się realizując szkolenie psychoterapeutyczne w Klinice Psychiatrii Dorosłych Szpitala Uniwersyteckiego w Krakowie. Doświadczenie zdobywałem w Poradni Zdrowia Psychicznego, szkole podstawowej oraz średniej jako psycholog szkolny, Podhalańskim Szpitalu Specjalistycznym im. Jana Pawła II
                        </p>
                    </article>
                </section>
                <section className=''>
                    <p>dd</p>
                </section>
            </div>
        </>
    );
}

About.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
