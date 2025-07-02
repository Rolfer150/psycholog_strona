import { TreeView } from '@lexical/react/LexicalTreeView';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function TreeViewPlugin() {
    const [editor] = useLexicalComposerContext();
    return (
        <div className="border-t mt-2">
            <TreeView editor={editor} />
        </div>
    );
}
