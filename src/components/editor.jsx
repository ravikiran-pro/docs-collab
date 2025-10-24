'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h1>Untitled document</h1>
      <p>Start typing to begin your document...</p>
    `,
    immediatelyRender: false,
  })

  if (!editor) {
    return null
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Google Docs Top Bar */}
      <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 sticky top-0 z-50 shadow-sm">
        <span className="text-sm text-gray-600 font-normal">Untitled document</span>
      </div>
      
      {/* Google Docs Toolbar */}
      <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 sticky top-12 z-40 shadow-sm">
        {/* Text Formatting Group */}
        <div className="flex items-center gap-0.5 mr-4">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('bold') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('italic') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('strike') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Strikethrough"
          >
            <span className="line-through">S</span>
          </button>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Heading Group */}
        <div className="flex items-center gap-0.5 mr-4">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Heading 1"
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Heading 2"
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('heading', { level: 3 }) ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Heading 3"
          >
            H3
          </button>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Lists Group */}
        <div className="flex items-center gap-0.5 mr-4">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('bulletList') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Bullet list"
          >
            •
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('orderedList') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Numbered list"
          >
            1.
          </button>
        </div>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Other Formatting */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('blockquote') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Quote"
          >
            "
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`w-8 h-8 border-none bg-transparent rounded flex items-center justify-center cursor-pointer text-sm text-gray-800 transition-colors hover:bg-gray-200 ${
              editor.isActive('code') ? 'bg-blue-600 text-white hover:bg-blue-600' : ''
            }`}
            title="Code"
          >
            &lt;/&gt;
          </button>
        </div>
      </div>

      {/* Google Docs Content Area */}
      <div className="flex-1 overflow-auto bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto">
          {/* White Document Area */}
          <div className="bg-white shadow-lg min-h-[calc(100vh-200px)] p-12 flex flex-col">
            <EditorContent 
              editor={editor} 
              className="prose prose-sm max-w-none focus:outline-none font-roboto text-sm leading-relaxed text-gray-800 flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor