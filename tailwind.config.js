/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#222225',
        charcoal: '#222225',
        'charcoal-dark': '#19191B',
        'charcoal-card': '#2B2B2F',
        'charcoal-border': '#3D3D43',
        'warm-sand': '#F3EFEA',
        'warm-sand-dark': '#E9E4DC',
        'warm-card': '#FFFFFF',
        'warm-border': '#DFD8CC',
        'doodle-blue': '#94A2F8',
        'doodle-blue-dark': '#3D68FF',
        'doodle-blue-light': '#B8C2FA',
        muted: '#8E95A5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 38s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
