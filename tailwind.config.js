/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scans all JS/TS files in the src folder for classes
  ],
  theme: {
    // Extending the default theme with custom configurations
    extend: {
      // Custom Color Palette
      colors: {
        'primary': {
          light: '#93c5fd',    // Light blue (Tailwind's blue-300)
          DEFAULT: '#3b82f6',  // Default blue (Tailwind's blue-500)
          dark: '#1e40af',     // Dark blue (Tailwind's blue-900)
        },
        'secondary': '#64748b',   // A cool gray for secondary elements (Tailwind's slate-500)
        'accent': '#f97316',      // Accent color for buttons, links, etc. (Tailwind's orange-500)
        'muted': '#94a3b8',       // Muted gray text (Tailwind's slate-400)
        'light-bg': '#f1f5f9',    // Light background color (Tailwind's slate-50)
        'dark-bg': '#1f2937',     // Dark background color (Tailwind's slate-800)
      },
      
      // Custom Fonts
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'sans-serif'],   // Custom font stack
        'heading': ['Poppins', 'sans-serif'],        // Font for headings
      },

      // Custom Spacing (extends default spacing)
      spacing: {
        '18': '4.5rem',    // Custom spacing unit for padding/margin
        '72': '18rem',     // Wider spacing for cards and forms
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },

      // Box Shadows (for card elements and modals)
      boxShadow: {
        'light-card': '0 4px 6px rgba(0, 0, 0, 0.05)',  // Light shadow for cards
        'heavy-card': '0 10px 20px rgba(0, 0, 0, 0.15)', // Heavier shadow for modals
        'input-focus': '0 0 0 2px rgba(59, 130, 246, 0.5)',  // Blue focus ring for form inputs
      },

      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',  // Fade-in animation for components
        'bounce-slow': 'bounce 3s infinite',        // Slower bounce effect
      },

      // Keyframes for custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      // Custom Transitions
      transitionProperty: {
        'height': 'height',  // Smooth transitions for height changes
        'spacing': 'margin, padding',  // Transition spacing properties (margin/padding)
      },

      // Responsive Breakpoints (customize breakpoints for mobile-first design)
      screens: {
        'xs': '475px',  // Extra small screens
        'sm': '640px',  // Default small breakpoint (Tailwind default)
        'md': '768px',  // Default medium breakpoint (Tailwind default)
        'lg': '1024px', // Default large breakpoint (Tailwind default)
        'xl': '1280px', // Default extra-large breakpoint (Tailwind default)
        '2xl': '1536px',// Additional breakpoint for very large screens
      },
    },
  },

  // Adding custom variants for hover, focus, and active states
  variants: {
    extend: {
      backgroundColor: ['active'], // Adding 'active' state to background colors
      textColor: ['group-hover'],  // Enabling group-hover for text colors
      opacity: ['disabled'],       // Add opacity when disabled
      cursor: ['disabled'],        // Add disabled cursor for buttons/inputs
    },
  },

  // Adding plugins for forms, typography, and aspect-ratio utilities
  plugins: [
    require('@tailwindcss/forms'),        // Plugin to improve form styling
    require('@tailwindcss/typography'),   // Plugin to handle text typography styles
    require('@tailwindcss/aspect-ratio'), // Plugin for responsive aspect ratios
  ],

  // Enable dark mode
  darkMode: 'class', // Enable dark mode (use class-based switching)
}
