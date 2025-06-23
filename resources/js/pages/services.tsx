import { Head } from '@inertiajs/react'
import WebLayout from '@/layouts/web-layout'

export default function Services() {
    return (
        <>
            <Head title="Usługi i ceny" />

            <div className="mx-8 my-12 p-8">
                <h1 className="text-7xl font-bold text-teal-400 mb-12">Usługi i ceny</h1>

                <section className="grid grid-cols-3 gap-4">
                    <div className="border border-teal-400 p-8 text-center">
                        <h2 className="text-2xl">Konsultacja psychologiczna online</h2>
                        <p className="text-xl">150 zł</p>
                    </div>
                </section>
            </div>
        </>
    );
}

Services.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
