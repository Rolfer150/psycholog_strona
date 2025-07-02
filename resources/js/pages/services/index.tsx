import { Head, Link, usePage } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Usługi',
        href: '/dashboard/services',
    },
];

export default function ServiceIndex() {
    const { services } = usePage().props as {
        services: {
            id: number;
            name: string;
            description: string;
            price: string;
        }[];
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Usługi" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Usługi</h1>
                    <Link href={route('services.create')}>
                        <Button variant="default">+ Dodaj usługę</Button>
                    </Link>
                </div>

                <Card className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="border-b">
                        <tr>
                            <th className="px-4 py-2 font-medium">Nazwa</th>
                            <th className="px-4 py-2 font-medium">Opis</th>
                            <th className="px-4 py-2 font-medium">Cena</th>
                            <th className="px-4 py-2 font-medium">Akcje</th>
                        </tr>
                        </thead>
                        <tbody>
                        {services.map((service) => (
                            <tr key={service.id} className="border-b hover:bg-muted/30 transition">
                                <td className="px-4 py-3">{service.name}</td>
                                <td className="px-4 py-3 text-muted-foreground">
                                    {service.description.length > 80
                                        ? service.description.slice(0, 80) + '...'
                                        : service.description}
                                </td>
                                <td className="px-4 py-3">{service.price}</td>
                                <td className="px-4 py-3 space-x-2">
                                    <Link
                                        href={route('services.edit', service.id)}
                                        className="text-teal-600 hover:underline"
                                    >
                                        Edytuj
                                    </Link>
                                    <Link
                                        href={route('services.destroy', service.id)}
                                        method="delete"
                                        as="button"
                                        className="text-red-600 hover:underline"
                                    >
                                        Usuń
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </AppLayout>
    );
}
