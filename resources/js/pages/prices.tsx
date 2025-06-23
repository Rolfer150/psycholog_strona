import { Head } from '@inertiajs/react'
import WebLayout from '@/layouts/web-layout'

export default function Prices() {
    return (
        <>
            <Head title="Umów wizytę" />

            <div className="max-w-xl mx-auto p-6 my-12 bg-white shadow-md">
                <h1 className="text-2xl font-semibold text-teal-400 text-center mb-6">Umów wizytę już teraz</h1>

            </div>
        </>
    )
}

Prices.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>
