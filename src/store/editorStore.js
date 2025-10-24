// src/store/editorStore.js
import { create } from 'zustand'

export const useEditorStore = create((set) => ({
  editor: null,
  canUndo: false,
  canRedo: false,
  zoom: 100,

  setEditor: (editor) => {
    if(editor){
        set({
            editor,
            canUndo: editor.can().undo(),
            canRedo: editor.can().redo(),
        })
    }
  },

  setZoom: (zoom) => {
    set({
        zoom: zoom
    })
  },
  resetEditor: () => set({ editor: null, canUndo: false, canRedo: false }),
}))
