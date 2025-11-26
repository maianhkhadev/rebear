/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateNodesFromDOM } from '@lexical/html';

export function DefaultValue({ defaultValue }: { defaultValue?: string }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!defaultValue) return;

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(defaultValue, 'text/html');
      const nodes = $generateNodesFromDOM(editor, dom);

      editor.update(() => {
        const rootNode = editor.getEditorState()._nodeMap.get('root');
        if (rootNode && 'append' in rootNode) {
          (rootNode as any).clear();
          (rootNode as any).append(...nodes);
        }
      });
    });
  }, [editor, defaultValue]);

  return null;
}

export default DefaultValue;