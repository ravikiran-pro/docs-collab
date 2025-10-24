import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react'


export const fontOptions = ['Arial', 'Inter', 'Courier New', 'Times New Roman', 'Comic Sans MS']

export const textStyleOptions = [
    { value: 'normal', label: 'Normal text' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'heading1', label: 'Heading 1' },
    { value: 'heading2', label: 'Heading 2' },
    { value: 'heading3', label: 'Heading 3' },
]

export const zoomOptions = ['50%', '75%', '100%', '125%', '150%', '200%']

export const alignOptions = [
    { value: 'left', icon: <AlignLeft className="w-4 h-4" />, label: 'Left' },
    { value: 'center', icon: <AlignCenter className="w-4 h-4" />, label: 'Center' },
    { value: 'right', icon: <AlignRight className="w-4 h-4" />, label: 'Right' },
    { value: 'justify', icon: <AlignJustify className="w-4 h-4" />, label: 'Justify' },
]


export const fancyColors = [
    '#F87171', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA',
    '#F472B6', '#FCD34D', '#22D3EE', '#EC4899', '#10B981'
]

export const getRandomColor = () => fancyColors[Math.floor(Math.random() * fancyColors.length)]