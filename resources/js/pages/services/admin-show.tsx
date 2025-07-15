import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Usługi', href: '/dashboard/services' },
    { title: 'Szczegóły usługi', href: '#' },
];

interface AdminShowServiceProps {
    service: {
        data: {
            id: number;
            name: string;
            slug: string;
            short_description?: string | null;
            description?: string | null;
            price: string;
            price_formatted: string;
            image_path?: string | null;
        }
    }
}

export default function AdminShowService({ service }: AdminShowServiceProps) {
    const s = service.data;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Usługa: ${s.name}`} />
            <div className="flex flex-col items-center py-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Szczegóły usługi</h1>
                <Card className="w-full max-w-3xl mx-auto p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg">
                    {/* Nazwa i cena */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
                        <span className="text-2xl font-bold text-zinc-800 dark:text-white">{s.name}</span>
                        <span className="text-xl font-semibold text-teal-500">{s.price_formatted || s.price + ' zł'}</span>
                    </div>

                    {/* Obrazek */}
                    {s.image_path && (
                        <div className="flex justify-center mb-8">
                            <img
                                src={s.image_path}
                                alt={s.name}
                                className="max-h-64 rounded-xl shadow border border-teal-200 dark:border-teal-800 object-cover"
                            />
                        </div>
                    )}

                    {/* Opis skrócony */}
                    {s.short_description && (
                        <div className="mb-4 p-4 bg-teal-50 dark:bg-neutral-800 rounded text-base text-zinc-700 dark:text-zinc-200">
                            <div dangerouslySetInnerHTML={{ __html: s.short_description }} />
                        </div>
                    )}

                    {/* Opis pełny */}
                    {s.description && (
                        <div className="prose max-w-none text-zinc-900 dark:text-zinc-100 mb-8">
                            <div dangerouslySetInnerHTML={{ __html: s.description }} />
                        </div>
                    )}

                    {/* Slug */}
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                        <span className="font-semibold">Slug:</span> <span className="ml-1">{s.slug}</span>
                    </div>

                    {/* Powrót */}
                    <div className="flex justify-center pt-4">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => window.history.back()}
                        >
                            Wróć
                        </Button>
                    </div>
                </Card>
            </div>
        </AppLayout>
    );
}
