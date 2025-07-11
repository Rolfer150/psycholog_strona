import { Head, usePage, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Card } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wiadomości',
        href: '/dashboard/messages'
    },
];

export default function MessageIndex() {
    const { messages } = usePage().props as {
        messages: {
            data: {
                id: number;
                name: string;
                email: string;
                text: string;
                created_at: string;
            }[];
            links: any[];
        };
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Wiadomości od klientów" />
            <div className="flex flex-col gap-6 p-4">
                <h1 className="text-3xl font-bold mb-4">Wiadomości kontaktowe</h1>
                <Card className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="border-b">
                        <tr>
                            <th className="px-4 py-2 font-medium">Imię i nazwisko</th>
                            <th className="px-4 py-2 font-medium">Email</th>
                            <th className="px-4 py-2 font-medium">Treść</th>
                            <th className="px-4 py-2 font-medium">Data</th>
                            <th className="px-4 py-2 font-medium">Akcje</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages.data.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-4 py-8 text-center text-gray-400">Brak wiadomości.</td>
                            </tr>
                        )}
                        {messages.data.map((msg) => (
                            <tr key={msg.id} className="border-b hover:bg-muted/30 transition">
                                <td className="px-4 py-3">{msg.name}</td>
                                <td className="px-4 py-3">{msg.email}</td>
                                <td className="px-4 py-3">
                                    {msg.text ? (msg.text.length > 120 ? msg.text.slice(0, 120) + '...' : msg.text) : ""}
                                </td>
                                <td className="px-4 py-3 text-muted-foreground">
                                    {msg.created_at && !isNaN(new Date(msg.created_at).getTime())
                                        ? new Date(msg.created_at).toLocaleString('pl-PL')
                                        : ""}
                                </td>
                                <td className="px-4 py-3">
                                    <Link
                                        href={route('messages.show', msg.id)}
                                        className="text-teal-600 hover:underline"
                                    >
                                        Otwórz
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                     {/*Paginate links*/}
                    <div className="flex gap-2 justify-end mt-4 mr-3">
                        {messages.links && messages.links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url ?? '#'}
                                className={`px-3 py-1 rounded ${
                                    link.active
                                        ? 'bg-teal-500 text-white'
                                        : 'bg-gray-100 dark:bg-neutral-700'
                                } ${!link.url && 'pointer-events-none opacity-50'}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </AppLayout>
    );
}
