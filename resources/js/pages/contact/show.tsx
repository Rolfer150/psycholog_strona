import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Wiadomości', href: '/dashboard/messages' },
    { title: 'Szczegóły wiadomości', href: '#' },
];

interface MessageShowProps {
    message: {
        data: {
            id: number;
            name: string;
            email: string;
            text: string;
            created_at: string;
            read: boolean;
        }
    }
}

export default function ShowMessage({ message }: MessageShowProps) {
    const m = message.data;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Wiadomość od ${m.name}`} />
            <div className="flex flex-col items-center py-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-white">Wiadomość od klienta</h1>
                <Card className="w-full max-w-xl mx-auto p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div>
                            <span className="text-xl font-bold text-zinc-800 dark:text-white">{m.name}</span>
                            <span className="ml-2 text-sm text-zinc-500">&lt;
                                <a href={`mailto:${m.email}`} className="hover:underline">{m.email}</a>
                                &gt;
                            </span>
                        </div>
                        <span className={`mt-3 md:mt-0 px-3 py-1 rounded-full text-xs font-bold ${
                            m.read
                                ? 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400'
                                : 'bg-orange-100 text-orange-700 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                            {m.read ? 'Przeczytana' : 'Nieprzeczytana'}
                        </span>
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 border-b border-zinc-200 dark:border-neutral-700 pb-2">
                        {m.created_at && !isNaN(new Date(m.created_at).getTime())
                            ? new Date(m.created_at).toLocaleString('pl-PL')
                            : ""}
                    </div>
                    <div className="min-h-[120px] text-base whitespace-pre-line text-zinc-800 dark:text-zinc-100">
                        {m.text}
                    </div>
                    <div className="pt-8 flex justify-center">
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
