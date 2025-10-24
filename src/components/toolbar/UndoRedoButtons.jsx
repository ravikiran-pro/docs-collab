'use client'

import { useEditorStore } from '@/store/editorStore'
import { Undo, Redo } from 'lucide-react'

const UndoRedoButtons = ({ onUndo, onRedo }) => {
  const { canUndo, canRedo } = useEditorStore()

  return (
    <div className="flex gap-1">
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={`
          w-8 h-8 flex items-center justify-center rounded-l transition-all
          ${canUndo
            ? 'bg-white text-gray-800 hover:bg-gray-200 cursor-pointer'
            : 'text-gray-400 cursor-not-allowed'}
        `}
        title="Undo (Ctrl+Z)"
      >
        <Undo className="w-4 h-4" />
      </button>

      <button
        onClick={onRedo}
        disabled={!canRedo}
        className={`
          w-8 h-8 flex items-center justify-center rounded-r transition-all
          ${canRedo
            ? 'bg-white text-gray-800 hover:bg-gray-200 cursor-pointer'
            : 'text-gray-400 cursor-not-allowed'}
        `}
        title="Redo (Ctrl+Y)"
      >
        <Redo className="w-4 h-4" />
      </button>
    </div>
  )
}

export default UndoRedoButtons
