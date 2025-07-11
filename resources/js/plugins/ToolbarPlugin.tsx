import {
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
} from 'lexical';
import {
    INSERT_UNORDERED_LIST_COMMAND,
    INSERT_ORDERED_LIST_COMMAND,
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useCallback, useEffect, useState } from 'react';
import { List, ListOrdered } from 'lucide-react';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    // Stan aktywnych formatów tekstu (bold, italic)
    const [activeFormats, setActiveFormats] = useState<{ bold: boolean; italic: boolean }>({
        bold: false,
        italic: false,
    });

    // Stan aktywnej listy: 'ul', 'ol' lub null
    const [activeList, setActiveList] = useState<'ul' | 'ol' | null>(null);

    // Funkcja formatowania tekstu
    const formatText = useCallback(
        (formatType: 'bold' | 'italic') => {
            editor.update(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                    selection.formatText(formatType);
                }
            });
        },
        [editor]
    );

    // Funkcja wstawiania list
    const insertList = useCallback(
        (type: 'ul' | 'ol') => {
            editor.update(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                    const command =
                        type === 'ul' ? INSERT_UNORDERED_LIST_COMMAND : INSERT_ORDERED_LIST_COMMAND;
                    editor.dispatchCommand(command, undefined);
                }
            });
        },
        [editor]
    );

    // Nasłuchiwanie zmian w edytorze, by aktualizować aktywne formaty i listy
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const selection = $getSelection();

                if (!$isRangeSelection(selection)) {
                    setActiveFormats({ bold: false, italic: false });
                    setActiveList(null);
                    return;
                }

                setActiveFormats({
                    bold: selection.hasFormat('bold'),
                    italic: selection.hasFormat('italic'),
                });

                // Sprawdzenie, czy zaznaczony blok jest listą punktowaną lub numerowaną
                const nodes = selection.getNodes();
                let foundList: 'ul' | 'ol' | null = null;

                for (const node of nodes) {
                    const type = node.getType();
                    if (type === 'listitem') {
                        const parent = node.getParent();
                        if (parent !== null) {
                            const parentType = parent.getType();
                            if (parentType === 'list') {
                                // @ts-ignore typ listy jest w getFormat()
                                const listFormat = parent.getFormat();
                                if (listFormat === 1) foundList = 'ol';
                                else if (listFormat === 0) foundList = 'ul';
                            }
                        }
                    }
                }
                setActiveList(foundList);
            });
        });
    }, [editor]);

    const baseBtn =
        'px-2 py-1 border border-gray-600 rounded cursor-pointer transition-colors';

    // Klasa do podświetlenia aktywnego przycisku
    const activeClass = 'bg-zinc-500 text-white border-zinc-400';

    return (
        <div className="flex gap-2 border-b border-sidebar-border/70 p-2 rounded-t bg-gray-800">
            <button
                onClick={() => formatText('bold')}
                className={`${baseBtn} ${activeFormats.bold ? activeClass : 'text-white hover:bg-zinc-700'}`}
                type="button"
                aria-label="Pogrubienie"
            >
                <strong>B</strong>
            </button>
            <button
                onClick={() => formatText('italic')}
                className={`${baseBtn} italic ${activeFormats.italic ? activeClass : 'text-white hover:bg-zinc-700'}`}
                type="button"
                aria-label="Kursywa"
            >
                I
            </button>
            <button
                onClick={() => insertList('ul')}
                className={`${baseBtn} ${activeList === 'ul' ? activeClass : 'text-white hover:bg-zinc-700'}`}
                type="button"
                aria-label="Lista punktowana"
            >
                <List className="w-4 h-4" />
            </button>
            <button
                onClick={() => insertList('ol')}
                className={`${baseBtn} ${activeList === 'ol' ? activeClass : 'text-white hover:bg-zinc-700'}`}
                type="button"
                aria-label="Lista numerowana"
            >
                <ListOrdered className="w-4 h-4" />
            </button>
        </div>
    );
}
