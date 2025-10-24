import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextStyleKit } from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import CodeBlock from '@tiptap/extension-code-block'
import { useEditorStore } from '@/store/editorStore'

export const useTiptapEditor = (initialContent = '') => {
  const { setEditor } = useEditorStore()

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }), // disable default
      TextStyleKit,
      TextAlign.configure({ types: ['paragraph', 'heading', 'codeBlock'] }),
      CodeBlock,
    ],
    content: initialContent || `
      <h1>Untitled document</h1>
      <p>Start typing to begin your document...</p>
    `,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setEditor(editor)
    },
    onMount: ({ editor }) => {
      setEditor(editor)
    },
  })


  return editor
}
