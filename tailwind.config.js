/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: {
          light: '#ffffff',
          dark: '#080c14',
        },
        surface: {
          light: '#f5f6f8',
          dark: '#0e1520',
        },
        border: {
          light: '#e5e7eb',
          dark: '#192433',
        },
        accent: {
          light: '#7c3aed',
          dark: '#3b82f6',
        },
        'accent-glow': {
          light: '#a78bfa',
          dark: '#60a5fa',
        },
        muted: {
          light: '#9ca3af',
          dark: '#4a5568',
        },
        text: {
          light: '#1f2937',
          dark: '#e6eef8',
        },
        'text-dim': {
          light: '#6b7280',
          dark: '#94a3b8',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
