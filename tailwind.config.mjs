/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Easttlux Brand Colors - Main (Navy Blue)
        brand: {
          main: {
            50: '#f4f5f9',
            100: '#e9ebf3',
            200: '#d3d7e7',
            300: '#adb5d5',
            400: '#808dbf',
            500: '#5f6ca8',
            600: '#4a5590',
            700: '#3d4474',
            800: '#353b61',
            900: '#1c1e4e', // Main brand color
            950: '#0f1029',
          },
          // Secondary (Light Blue)
          secondary: {
            50: '#f0f9fd',
            100: '#e0f2fb',
            200: '#bbe6f7',
            300: '#80d4f1',
            400: '#3dbfe7',
            500: '#12a3dc', // Secondary brand color
            600: '#0a84bb',
            700: '#0a6998',
            800: '#0d597e',
            900: '#104a69',
            950: '#0a2f46',
          },
        },
        // Semantic colors using CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'myriad': ['Myriad Pro', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'outfit': ['Outfit', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'system-ui', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1c1e4e 0%, #12a3dc 100%)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #12a3dc 0%, #1c1e4e 100%)',
        'brand-radial': 'radial-gradient(circle at top right, #12a3dc 0%, #1c1e4e 70%)',
      },
      fontSize: {
        'hero-title': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-subtitle': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'section-title': ['clamp(1.875rem, 5vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'stats-number': ['clamp(2rem, 4vw, 2.25rem)', { lineHeight: '1', fontWeight: '700' }],
        'stats-label': ['clamp(0.875rem, 2vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'counter': {
          '0%': { '--num': '0' },
          '100%': { '--num': '100' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      }
    },
  },
  plugins: [],
}

