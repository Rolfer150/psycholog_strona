import { Head } from '@inertiajs/react'
import Heading from '@/components/home-components/heading'
import WebLayout from '@/layouts/web-layout'

export default function Home() {
    return (
        <>
            <Head title="Strona główna" />

            <Heading
                title="Nowa strona gabinetu Psychoterapia"
                description="eee"
            />
        </>
    )
}

Home.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>
