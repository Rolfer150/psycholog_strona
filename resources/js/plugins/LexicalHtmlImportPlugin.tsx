import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot, $getSelection } from 'lexical';
import { useEffect } from 'react';
import { $generateNodesFromDOM } from '@lexical/html';

type Props = {
    htmlString: string;
};

export default function LexicalHtmlImportPlugin({ htmlString }: Props) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (!htmlString) return;
        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(htmlString, 'text/html');
            const nodes = $generateNodesFromDOM(editor, dom.body);
            const root = $getRoot();
            root.clear();
            root.append(...nodes);
        });
    }, [editor, htmlString]);

    return null;
}
