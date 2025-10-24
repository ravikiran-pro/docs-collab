/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'toolbar-bg': 'var(--toolbar-bg)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        'hover-bg': 'var(--hover-bg)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#202124',
            fontSize: '14px',
            lineHeight: '1.5',
            '& .ProseMirror': {
              outline: 'none !important',
              border: 'none !important',
              boxShadow: 'none !important',
              height: '100%',
              width: '100%',
              minHeight: 'calc(100vh - 300px)',
              padding: '0',
              margin: '0',
            },
            h1: {
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '1.25',
              margin: '0 0 16px 0',
              color: '#202124',
            },
            h2: {
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1.3',
              margin: '24px 0 8px 0',
              color: '#202124',
            },
            h3: {
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '1.4',
              margin: '20px 0 6px 0',
              color: '#202124',
            },
            p: {
              margin: '0 0 12px 0',
              lineHeight: '1.5',
            },
            ul: {
              margin: '0 0 12px 0',
              paddingLeft: '24px',
            },
            ol: {
              margin: '0 0 12px 0',
              paddingLeft: '24px',
            },
            li: {
              margin: '0 0 4px 0',
            },
            strong: {
              fontWeight: '500',
            },
            em: {
              fontStyle: 'italic',
            },
            code: {
              backgroundColor: '#f1f3f4',
              padding: '1px 4px',
              borderRadius: '2px',
              fontFamily: 'var(--font-roboto), monospace',
              fontSize: '13px',
            },
            pre: {
              backgroundColor: '#f8f9fa',
              border: '1px solid #dadce0',
              borderRadius: '4px',
              padding: '12px',
              margin: '12px 0',
              overflowX: 'auto',
              fontFamily: 'var(--font-roboto), monospace',
              fontSize: '13px',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            blockquote: {
              borderLeft: '4px solid #1a73e8',
              paddingLeft: '16px',
              margin: '16px 0',
              color: '#5f6368',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
