import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edytuj usługę',
        href: '/dashboard/services/edit',
    },
];

export default function EditService() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('services.update'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edytuj usługę" />

        </AppLayout>
    );
}
