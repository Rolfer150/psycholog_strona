import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';
import { Card } from '@/components/ui/card';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { EditorState } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from '@/plugins/ToolbarPlugin';
import ExampleTheme from '@/plugins/ExampleTheme';
import { ParagraphNode, TextNode } from 'lexical';
import { ListPlugin  } from '@lexical/react/LexicalListPlugin';
import { ListNode, ListItemNode } from '@lexical/list';
import RemoveEmptyListPlugin from '@/plugins/RemoveEmptyListPlugin';
import { X } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Utwórz usługę',
        href: '/dashboard/services/create',
    },
];

const editorConfig = {
    namespace: 'ServiceEditor',
    theme: ExampleTheme,
    onError(error: Error) {
        throw error;
    },
    nodes: [
        ListNode,
        ListItemNode,
        ParagraphNode,
        TextNode,
    ],
};

const placeholder = 'Wpisz opis usługi...';

export default function CreateService() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        image: null,
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('services.store'));
    };

    const onEditorChange = (editorState: EditorState) => {
        editorState.read(() => {
            const htmlString = document.getElementById('contentEditable')?.innerHTML || '';
            setData('description', htmlString);
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Utwórz usługę" />
            <div className="flex flex-col gap-6 p-4">
                <Card className="p-6 space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Nazwa */}
                        <div>
                            <label className="block font-medium mb-1">Nazwa</label>
                            <Input
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Cena */}
                        <div>
                            <label className="block font-medium mb-1">Cena (zł)</label>
                            <Input
                                type="number"
                                step="0.01"
                                max="999"
                                value={data.price}
                                onChange={(e) => setData('price', e.target.value)}
                                className="w-full"
                            />
                            {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price}</p>}
                        </div>

                        {/* Obrazek */}
                        <div>
                            <label className="block font-medium mb-1">Zdjęcie</label>
                            <Input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    const file = e.target.files?.[0] ?? null;
                                    setData('image_path', file);

                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setImagePreview(reader.result as string);
                                        };
                                        reader.readAsDataURL(file);
                                    } else {
                                        setImagePreview(null);
                                    }
                                }}
                                className="w-full cursor-pointer"
                            />
                            <p className="mt-1 ml-3 text-sm">SVG, PNG, JPG</p>
                            {errors.image && (
                                <p className="text-sm text-red-500 mt-1">{errors.image}</p>
                            )}

                            {imagePreview && (
                                <div className="relative mt-4 inline-block">
                                    <img
                                        src={imagePreview}
                                        alt="Podgląd zdjęcia"
                                        className="max-h-48 rounded border"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setImagePreview(null);
                                            setData('image_path', null);
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = '';
                                            }
                                        }}
                                        className="absolute top-2 right-2 rounded-full bg-red-600 text-white p-1 hover:bg-red-700 cursor-pointer"
                                        aria-label="Usuń zdjęcie"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Opis */}
                        <div>
                            <label className="block font-medium mb-1">Opis</label>
                            <LexicalComposer initialConfig={editorConfig}>
                                <div className="border rounded-md">
                                    <ToolbarPlugin />
                                    <div className="p-2 min-h-[150px]">
                                        <RichTextPlugin
                                            contentEditable={
                                                <ContentEditable
                                                    id="contentEditable"
                                                    className="outline-none w-full min-h-[100px]"
                                                /> as React["JSX.Element"]
                                            }
                                            placeholder={
                                                <div className="text-gray-400 absolute pointer-events-none">
                                                    {placeholder}
                                                </div>
                                            }
                                            ErrorBoundary={LexicalErrorBoundary}
                                        />
                                        <OnChangePlugin onChange={onEditorChange} />
                                        <HistoryPlugin />
                                        <ListPlugin />
                                        <RemoveEmptyListPlugin />
                                        <AutoFocusPlugin />
                                    </div>
                                </div>
                            </LexicalComposer>
                            {errors.description && (
                                <p className="text-sm text-red-500 mt-1">{errors.description}</p>
                            )}
                        </div>

                        {/* Przycisk zapisu i powrotu */}
                        <div className="pt-4 flex gap-4">
                            <Button type="submit" disabled={processing}>
                                Zapisz usługę
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => window.history.back()}
                            >
                                Wróć
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </AppLayout>
    );
}
