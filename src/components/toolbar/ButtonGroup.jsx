'use client'

import { useState } from 'react'

const ButtonGroup = ({ 
  options = [], 
  selectedValue, 
  onSelect, 
  disabled = false 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleSelect = (value) => {
    if (!disabled && onSelect) {
      onSelect(value)
    }
  }

  return (
    <div className="flex border border-gray-300 rounded overflow-hidden">
      {options.map((option, index) => {
        const value = typeof option === 'string' ? option : option.value
        const label = typeof option === 'string' ? option : option.label
        const icon = typeof option === 'object' ? option.icon : null
        
        const isSelected = selectedValue === value
        const isHovered = hoveredIndex === index
        const isFirst = index === 0
        const isLast = index === options.length - 1

        return (
          <button
            key={index}
            onClick={() => handleSelect(value)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            disabled={disabled}
            className={`
              flex items-center justify-center gap-1 px-3 py-1.5 text-sm font-medium
              transition-colors border-r border-gray-300 last:border-r-0
              ${disabled 
                ? 'cursor-not-allowed text-gray-400 bg-gray-50' 
                : 'cursor-pointer text-gray-800 hover:bg-gray-100'
              }
              ${isSelected 
                ? 'bg-blue-600 text-white hover:bg-blue-600' 
                : ''
              }
              ${isFirst ? 'rounded-l' : ''}
              ${isLast ? 'rounded-r' : ''}
            `}
            title={label}
          >
            {icon && <span className="text-xs">{icon}</span>}
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ButtonGroup
