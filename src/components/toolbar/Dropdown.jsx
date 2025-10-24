'use client'

import { useState } from 'react'

const Dropdown = ({
  options = [],
  selectedValue,
  onSelect,
  placeholder = "Select...",
  label,
  disabled = false,
  minWidth = 120,
}) => {
  const handleChange = (e) => {
    const value = e.target.value
    if (onSelect) onSelect(value)
  }

  return (
    <div style={{ minWidth }}>
      <select
        value={selectedValue || ""}
        onChange={handleChange}
        disabled={disabled}
        title={label}
        className={`
          w-full px-3 py-2 text-sm text-gray-800
          border border-gray-200 rounded-lg bg-white
          shadow-sm transition-all duration-200
          ${disabled ? 'cursor-not-allowed text-gray-400 opacity-50' : 'cursor-pointer hover:shadow-md'}
          overflow-hidden text-ellipsis
        `}
      >
        {placeholder && !selectedValue && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options.map((option, idx) => {
          const value = typeof option === 'string' ? option : option.value
          const labelText = typeof option === 'string' ? option : option.label
          return (
            <option key={idx} value={value}>
              {labelText}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown
