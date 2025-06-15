import { Head, Link, usePage } from '@inertiajs/react';
import Heading from '@/components/home-components/heading';

export default function Home() {
    return (
        <>
            <Head title="Strona główna">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Heading
                title='Nowa strona gabinetu Psychoterapia'
                description='eee' />
        </>
    );
}
