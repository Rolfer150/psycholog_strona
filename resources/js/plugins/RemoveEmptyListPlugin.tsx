import { useEffect } from 'react';
import {
    $getSelection,
    $isRangeSelection,
    COMMAND_PRIORITY_EDITOR,
    KEY_ENTER_COMMAND,
    FORMAT_ELEMENT_COMMAND,
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function RemoveEmptyListPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerCommand(
            KEY_ENTER_COMMAND,
            (event) => {
                const selection = $getSelection();
                if (!$isRangeSelection(selection)) return false;

                const nodes = selection.getNodes();
                for (const node of nodes) {
                    const parent = node.getParent();
                    if (!parent) continue;

                    if (parent.getType() === 'listitem' && node.getTextContent().trim() === '') {
                        editor.update(() => {
                            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'paragraph');
                        });
                        event.preventDefault();
                        return true;
                    }
                }
                return false;
            },
            COMMAND_PRIORITY_EDITOR
        );
    }, [editor]);

    return null;
}
