'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { alignOptions as options } from '@/constants/helper'


const AlignPicker = ({ defaultValue = 'left', onChange }) => {
  const [selected, setSelected] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const pickerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (value) => {
    setSelected(value)
    onChange?.(value)
    setOpen(false)
  }

  const currentIcon = options.find(o => o.value === selected)?.icon

  return (
    <div className="relative" ref={pickerRef}>
      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center justify-center w-8 h-8 rounded-sm transition-all
          hover:bg-gray-100 text-gray-700
          ${open ? 'bg-gray-100 shadow-sm' : ''}
        `}
      >
        {currentIcon}
        <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Popover */}
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md flex z-50 p-1">
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`
                w-7 h-7 flex items-center justify-center rounded-sm transition-all
                ${selected === opt.value 
                  ? 'bg-blue-100 text-blue-700 scale-110' 
                  : 'hover:bg-gray-100 text-gray-700'}
              `}
              title={opt.label}
            >
              {opt.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AlignPicker
