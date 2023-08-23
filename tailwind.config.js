/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {

        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#090E34",
        dark: "#1D2144",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#959CB1",
        // primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554", "cyan":"#48C7FA"}
      },
      screens: {
        xs: "450px",
        // => @media (min-width: 450px) { ... }
  
        sm: "575px",
        // => @media (min-width: 576px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "992px",
        // => @media (min-width: 992px) { ... }
  
        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
  
        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }
      },
      extend: {
        boxShadow: {
          signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
          one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
          sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        },
      },
      fontFamily: {
        'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    }
  },
  plugins: [],
}



