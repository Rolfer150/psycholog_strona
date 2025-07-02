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
import { useCallback } from 'react';
import { List, ListOrdered } from 'lucide-react';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    const formatText = useCallback((formatType: 'bold' | 'italic') => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                selection.formatText(formatType);
            }
        });
    }, [editor]);

    const insertList = useCallback((type: 'ul' | 'ol') => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const command =
                    type === 'ul'
                        ? INSERT_UNORDERED_LIST_COMMAND
                        : INSERT_ORDERED_LIST_COMMAND;
                editor.dispatchCommand(command, undefined);
            }
        });
    }, [editor]);

    const baseBtn =
        'px-2 py-1 border border-gray-600 rounded text-white cursor-pointer hover:bg-zinc-700 focus:outline-none transition-colors';

    return (
        <div className="flex gap-2 border-b border-sidebar-border/70 p-2 rounded-t">
            <button
                onClick={() => formatText('bold')}
                className={baseBtn}
                type="button"
                aria-label="Pogrubienie"
            >
                <strong>B</strong>
            </button>
            <button
                onClick={() => formatText('italic')}
                className={`${baseBtn} italic`}
                type="button"
                aria-label="Kursywa"
            >
                I
            </button>
            <button
                onClick={() => insertList('ul')}
                className={baseBtn}
                type="button"
                aria-label="Lista punktowana"
            >
                <List className="w-4 h-4" />
            </button>
            <button
                onClick={() => insertList('ol')}
                className={baseBtn}
                type="button"
                aria-label="Lista numerowana"
            >
                <ListOrdered className="w-4 h-4" />
            </button>
        </div>
    );
}
