/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '18p': '18%', // Añade una clase personalizada para el desenfoque específico
      },
      backgroundColor: {
        'blue-Nav': 'rgba(3, 67, 99, 0.8)',
      },
      backgroundImage: {
        'degradado': 'linear-gradient(135deg, rgba(255,138,0,0.443) 15%, rgba(246,246,246,1) 100%)',
      },
      colors:{
        "blue-text": "#006BA0",
        "blue-title": "#034363",
        "btn-orange": "#FF8A00",
        "btn-blue": "#62A2C2",
        "orange-title": "#FF8A00",
        "yellow-bar" : "#FFB905",
        "green-bar" : "#2EBF7E"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

