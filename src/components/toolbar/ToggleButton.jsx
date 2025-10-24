'use client'

import { useState } from 'react'

const ToggleButton = ({
  icon,
  label,
  isActive = false,
  onClick,
  tooltip,
  disabled = false,
  type = 'default'
}) => {

  console.log({
    icon,
  label,
  isActive,
  onClick,
  tooltip,
  disabled,
  type,
  }, "ToggleButton")
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }
  const getButtonStyle = () => {
  const activeBg = 'bg-blue-50 shadow-inner';
  const activeText = 'text-blue-700';
  const defaultBg = 'bg-transparent'; // non-active state

  switch (type) {
    case 'bold':
      return `${isActive ? activeBg : defaultBg} font-bold ${isActive ? activeText : 'text-gray-800'}`;
    case 'italic':
      return `${isActive ? activeBg : defaultBg} italic ${isActive ? activeText : 'text-gray-800'}`;
    case 'underline':
      return `${isActive ? activeBg : defaultBg} underline ${isActive ? activeText : 'text-gray-800'}`;
    default:
      return `${isActive ? activeBg : defaultBg} ${isActive ? activeText : 'text-gray-800'}`;
  }
}



  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={`
        w-8 h-8 border-none rounded-sm flex items-center justify-center 
        cursor-pointer text-sm text-gray-800 transition-all duration-200 ml-1 mr-1
        ${disabled
          ? 'cursor-not-allowed text-gray-400 opacity-50'
          : 'hover:bg-gray-100 hover:shadow-sm'
        }
        ${getButtonStyle()}
        ${isHovered && !disabled ? 'shadow-sm' : ''}
      `}
      title={tooltip || label}
    >
      <span className={`font-bold ${type === 'bold' ? 'font-bold' : ''} ${type === 'italic' ? 'italic' : ''} ${type === 'underline' ? 'underline' : ''}`}>
        {icon}
      </span>
    </button>
  )
}

export default ToggleButton
