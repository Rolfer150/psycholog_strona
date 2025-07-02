// resources/js/Pages/Services/Create.tsx
import { Head, usePage } from '@inertiajs/react';
import WebLayout from '@/layouts/web-layout';

export default function Services() {
    const { services = { data: [] } } = usePage().props as {
        services: {
            data: {
                id: number;
                title: string;
                description?: string;
                price: string;
                image_url: string;
            }[];
        };
    };

    return (
        <>
            <Head title="Usługi i ceny" />

            <div className="mx-8 my-12 p-8">
                <h1 className="text-7xl font-bold text-teal-400 mb-12">Usługi i ceny</h1>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 gap-6">
                    {services.map(service => (
                        <div key={service.id} className="border border-teal-400 p-8 text-center rounded-xl">
                            {/*{service.image_url && (*/}
                            {/*    <img*/}
                            {/*        src={service.image_url}*/}
                            {/*        alt={service.name}*/}
                            {/*        className="mb-4 mx-auto max-h-48 object-cover"*/}
                            {/*    />*/}
                            {/*)}*/}
                            <h2 className="text-2xl font-semibold">{service.name}</h2>
                            <div className="text-gray-600 my-2" dangerouslySetInnerHTML={{ __html: service.description ?? '' }}></div>
                            <h3 className="text-2xl text-teal-600 font-bold">Cena</h3>
                            <p className="text-xl text-teal-600 font-bold">{service.price}</p>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

Services.layout = (page: React.ReactNode) => <WebLayout>{page}</WebLayout>;
