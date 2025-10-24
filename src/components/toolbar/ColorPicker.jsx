'use client'

import { useState, useRef, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'

const ColorPicker = ({
  selectedColor = '#000000',
  onColorChange = () => null,
  label = 'Color',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState('#000000');
  const colorRef = useRef(null)

  useEffect(()=>{
    setColor(color)
  },[selectedColor])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorRef.current && !colorRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleColorChange = (color) => {
    setColor(color)
    onColorChange(color)
  }

  return (
    <div className="relative inline-block" ref={colorRef}>
      {/* Trigger button (A with underline color) */}
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        title={label}
        className={`
    relative inline-flex flex-col items-center justify-center
    px-2 py-1 transition-all duration-150
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${isOpen ? 'scale-105' : ''}
  `}
        style={{
          fontSize: 14,
          color: '#1f1f1f'
        }}
      >
        <span className="font-bold leading-none select-none">A</span>
        <span
          className="block w-4 rounded-full mt-[2px] transition-colors duration-200"
          style={{
            height: 3,
            backgroundColor: color || '#1f1f1f',
          }}
        />
      </button>


      {/* Popover */}
      {isOpen && (
        <div
          className="
            absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50
            bg-white border border-gray-200 rounded-xl shadow-lg p-3
          "
        >
          <HexColorPicker color={color} onChange={handleColorChange} />
          <input
            type="text"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="
              w-full mt-3 px-2 py-1 text-xs border border-gray-300 rounded
              text-center outline-none focus:ring-1 focus:ring-blue-400
            "
          />
        </div>
      )}
    </div>
  )
}

export default ColorPicker