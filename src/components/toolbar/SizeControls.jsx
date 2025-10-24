'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const SizeControls = ({
  currentSize = 12,
  onSizeChange,
  min = 8,
  max = 72,
  step = 1,
  disabled = false,
  theme = 'light', // 'light' | 'dark'
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleDecrease = () => {
    if (!disabled && currentSize > min && onSizeChange) {
      onSizeChange(Math.max(min, currentSize - step))
    }
  }

  const handleIncrease = () => {
    if (!disabled && currentSize < max && onSizeChange) {
      onSizeChange(Math.min(max, currentSize + step))
    }
  }

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value >= min && value <= max && onSizeChange) {
      onSizeChange(value)
    }
  }

  const baseColors =
    theme === 'dark'
      ? {
          bg: 'bg-neutral-900',
          border: 'border-neutral-700',
          text: 'text-neutral-100',
          hover: 'hover:bg-neutral-800',
          icon: 'text-neutral-300 hover:text-white',
        }
      : {
          bg: 'bg-white',
          border: 'border-gray-200',
          text: 'text-gray-800',
          hover: 'hover:bg-gray-50',
          icon: 'text-gray-600 hover:text-gray-900',
        }

  return (
    <div
      className={`
        flex items-center ${baseColors.bg} ${baseColors.border}
        border rounded-xl shadow-xs transition-all duration-150
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}
      `}
    >
      {/* Decrease */}
      <button
        onClick={handleDecrease}
        disabled={disabled || currentSize <= min}
        className={`
          w-8 h-8 flex items-center justify-center rounded-l-xl border-r ${baseColors.border}
          ${baseColors.icon} transition-all duration-150
          ${
            disabled || currentSize <= min
              ? 'cursor-not-allowed opacity-40'
              : `${baseColors.hover} cursor-pointer`
          }
        `}
        title="Decrease font size"
      >
        <Minus className="w-4 h-4" />
      </button>

      {/* Input */}
      <input
        type="number"
        value={currentSize}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        className={`
          w-14 h-8 text-center text-sm font-medium outline-none bg-transparent
          ${baseColors.text} ${disabled ? 'cursor-not-allowed' : ''}
          focus:ring-1 ${
            theme === 'dark' ? 'focus:ring-blue-500' : 'focus:ring-blue-400'
          } focus:rounded-md transition-all
        `}
      />

      {/* Increase */}
      <button
        onClick={handleIncrease}
        disabled={disabled || currentSize >= max}
        className={`
          w-8 h-8 flex items-center justify-center rounded-r-xl border-l ${baseColors.border}
          ${baseColors.icon} transition-all duration-150
          ${
            disabled || currentSize >= max
              ? 'cursor-not-allowed opacity-40'
              : `${baseColors.hover} cursor-pointer`
          }
        `}
        title="Increase font size"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}

export default SizeControls
