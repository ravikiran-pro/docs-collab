'use client'

import { useTiptapEditor } from '@/hoooks/useTipTapEditor'
import { EditorContent } from '@tiptap/react'
import TopBar from './topbar'
import MenuBar from './menubar'
import { useEditorStore } from '@/store/editorStore'

const Editor = () => {

  useTiptapEditor()

  const { editor, zoom, setZoom } = useEditorStore()

  if (!editor) {
    return null
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">

      <TopBar />
      <MenuBar editor={editor} setZoom={setZoom} />

      <ZoomWrapper zoom={zoom}>
        <EditorContent
          editor={editor}
          className="prose prose-sm max-w-none focus:outline-none font-roboto text-sm leading-relaxed text-gray-800 flex-1"
        />
      </ZoomWrapper>
    </div>
  )
}

const ZoomWrapper = ({ zoom = 100, children }) => {
  const scale = zoom / 100

  return (
    <div className="flex-1 overflow-auto bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="bg-white shadow-lg p-12 flex flex-col origin-top-left"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: `${100 / scale}%`, // counteract scaling to maintain layout width
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Editor