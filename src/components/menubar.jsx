import { useState } from 'react'

import ToggleButton from './toolbar/ToggleButton'
import Dropdown from './toolbar/Dropdown'
import SizeControls from './toolbar/SizeControls'
import ColorPicker from './toolbar/ColorPicker'
import UndoRedoButtons from './toolbar/UndoRedoButtons'
import InsertLinkButton from './toolbar/InsertLinkButton'
import { List, ListOrdered, Code } from 'lucide-react'
import AlignPicker from './toolbar/AlignPicker'
import { useEditorStore } from '@/store/editorStore'
import { fontOptions, textStyleOptions, zoomOptions } from '@/constants/helper'

const MenuBar = ({ editor, setZoom }) => {

    const [toolbarState, setToolbarState] = useState({
        fontFamily: 'Arial',
        fontSize: 12,
        fontColor: '#000000',
        textStyle: 'normal',
        zoom: '100%',
        alignment: 'left',
        bold: false,
        italic: false,
        underline: false,
        bulletList: false,
        orderedList: false,
        codeBlock: false
    })

    if (!editor) {
        return null
    }

    const editorActions = {
        fontFamily: (value) => editor.chain().focus().setFontFamily(value).run(),
        fontSize: (value) => editor.chain().focus().setFontSize(`${value}px`).run(),
        fontColor: (value) => editor.chain().focus().setColor(value).run(),
        textStyle: (value) => {
            const styles = {
                normal: () => editor.chain().focus().setParagraph().run(),
                subtitle: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
                heading1: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                heading2: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                heading3: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            }
            styles[value]?.()
        },
        zoom: (value) => setZoom(value ? parseInt(value) : 100), 
        bold: () => editor.chain().focus().toggleBold().run(),
        italic: () => editor.chain().focus().toggleItalic().run(),
        underline: () => editor.chain().focus().toggleUnderline().run(),
        bulletList: () => editor.chain().focus().toggleBulletList().run(),
        orderedList: () => editor.chain().focus().toggleOrderedList().run(),
        codeBlock: () => editor.chain().focus().toggleCodeBlock().run(),
        alignment: (value) => editor.chain().focus().setTextAlign(value).run(),
    }


    // Event handlers
    const handleChange = (key, value) => {
        setToolbarState(prev => ({ ...prev, [key]: value }))
        editorActions[key]?.(value)
    }


    const handleLinkInsert = (linkData) => {
        // TODO: Implement link insertion
        console.log('Link inserted:', linkData)
    }

    const handleUndo = () => {
        editor.chain().focus().undo().run()
    }

    const handleRedo = () => {
        editor.chain().focus().redo().run()
    }

    return (
        <div className="h-12 flex items-center justify-center px-4 sticky top-12 z-40">
            <div
                className="
      flex items-center gap-2 px-3 py-1 bg-gray-100
      bg-white rounded-2xl shadow-inner border border-gray-200
      hover:shadow-md transition-all duration-200
    "
            >
                {/* Document Controls */}
                <div className="flex items-center gap-0.5 mr-4">
                    <UndoRedoButtons
                        onUndo={handleUndo}
                        onRedo={handleRedo}
                        editor={editor}
                    />
                </div>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Font Controls */}
                <div className="flex items-center gap-2 mr-4">
                    <Dropdown
                        options={fontOptions}
                        selectedValue={toolbarState.fontFamily}
                        onSelect={(val) => handleChange('fontFamily', val)}
                        label="Font Family"
                    />
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    <SizeControls
                        currentSize={toolbarState.fontSize}
                        onSizeChange={(val) => handleChange('fontSize', val)}
                        min={8}
                        max={72}
                    />
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    {/* Zoom Control */}
                    <div className="flex items-center gap-0.5">
                        <Dropdown
                            options={zoomOptions}
                            selectedValue={toolbarState.zoom}
                            onSelect={(val) => handleChange('zoom', val)}
                            label="Zoom"
                        />
                    </div>
                </div>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Text Fromat Controls */}
                <div className="flex items-center gap-0.5 mr-4">
                    <ToggleButton
                        icon="B"
                        label="Bold"
                        isActive={toolbarState.bold}
                        onClick={() => handleChange('bold', !toolbarState.bold)}
                        tooltip="Bold (Ctrl+B)"
                        type="bold"
                    />
                    <ToggleButton
                        icon="Ɪ"
                        label="Italic"
                        isActive={toolbarState.italic}
                        onClick={() => handleChange('italic', !toolbarState.italic)}
                        tooltip="Italic (Ctrl+I)"
                        type="italic"
                    />
                    <ToggleButton
                        icon="U"
                        label="Underline"
                        isActive={toolbarState.underline}
                        onClick={() => handleChange('underline', !toolbarState.underline)}
                        tooltip="Underline (Ctrl+U)"
                        type="underline"
                    />
                    <ColorPicker
                        selectedColor={toolbarState.fontColor}
                        onColorChange={(val) => handleChange('fontColor', val)}
                        label="Font Color"
                    />
                </div>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Text Styles Controls */}
                <div className="flex items-center gap-0.5 mr-4">
                    <Dropdown
                        options={textStyleOptions}
                        selectedValue={toolbarState.textStyle}
                        onSelect={(val) => handleChange('textStyle', val)}
                        label="Text Style"
                    />
                </div>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Text Alignment Controls*/}
                <div className="flex items-center gap-0.5 mr-4">
                    <AlignPicker
                        defaultValue={toolbarState.alignment}
                        onChange={(val) => handleChange('alignment', val)}
                    />
                </div>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Lists Controls */}
                <div className="flex items-center gap-0.5 mr-4">
                    <ToggleButton
                        icon={<List className="w-4 h-4" />}
                        label="Bullet List"
                        isActive={toolbarState.bulletList}
                        onClick={() => handleChange('bulletList', !toolbarState.bulletList)}
                        tooltip="Bullet list"
                    />
                    <ToggleButton
                        icon={<ListOrdered className="w-4 h-4" />}
                        label="Numbered List"
                        isActive={toolbarState.orderedList}
                        onClick={() => handleChange('orderedList', !toolbarState.orderedList)}
                        tooltip="Numbered list"
                    />
                </div>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Other Formatting Controls */}
                <div className="flex items-center gap-0.5 mr-4">
                    <ToggleButton
                        icon={<Code className="w-4 h-4" />}
                        label="Code Block"
                        isActive={toolbarState.codeBlock}
                        onClick={() => handleChange('codeBlock', !toolbarState.codeBlock)}
                        tooltip="Code block"
                    />
                    <InsertLinkButton
                        onLinkInsert={handleLinkInsert}
                    />
                </div>
            </div>
        </div>
    )
}

export default MenuBar