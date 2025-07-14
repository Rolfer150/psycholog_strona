import { Head, usePage, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Panel Administratora', href: '/dashboard' },
];

export default function Dashboard() {
    const { visits_today = 0, visits_lastHour = 0, visits_total = 0, stats = [], type = 'day' } = usePage().props as any;
    const [selectedType, setSelectedType] = useState(type);

    const handleTypeChange = (val: string) => {
        setSelectedType(val);
        router.get(route('dashboard'), { type: val }, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Panel Administratora" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Liczniki */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-teal-500">{visits_today}</span>
                        <span className="mt-2 text-lg">Wizyty dzisiaj</span>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-teal-500">{visits_lastHour}</span>
                        <span className="mt-2 text-lg">Wizyty ostatnia godzina</span>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-teal-500">{visits_total}</span>
                        <span className="mt-2 text-lg">Wizyt ogółem</span>
                    </div>
                </div>
                {/* Wykres */}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 overflow-hidden rounded-xl border md:min-h-min bg-white dark:bg-neutral-900 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Statystyki odwiedzin</h2>
                        <div>
                            {/*<button*/}
                            {/*    className={`px-3 py-1 mx-1 rounded ${selectedType === 'hour' ? 'bg-teal-400 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}*/}
                            {/*    onClick={() => handleTypeChange('hour')}*/}
                            {/*>Godzina</button>*/}
                            <button
                                className={`px-3 py-1 mx-1 cursor-pointer rounded ${selectedType === 'day' ? 'bg-teal-400 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}
                                onClick={() => handleTypeChange('day')}
                            >Dzień</button>
                            <button
                                className={`px-3 py-1 mx-1 cursor-pointer rounded ${selectedType === 'week' ? 'bg-teal-400 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}
                                onClick={() => handleTypeChange('week')}
                            >Tydzień</button>
                            <button
                                className={`px-3 py-1 mx-1 cursor-pointer rounded ${selectedType === 'month' ? 'bg-teal-400 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}
                                onClick={() => handleTypeChange('month')}
                            >Miesiąc</button>
                            <button
                                className={`px-3 py-1 mx-1 cursor-pointer rounded ${selectedType === 'year' ? 'bg-teal-400 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}
                                onClick={() => handleTypeChange('year')}
                            >Rok</button>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={stats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="label" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Line type="monotone" dataKey="count" stroke="#14b8a6" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </AppLayout>
    );
}
