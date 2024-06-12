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
        'blue-Nav': 'rgba(3, 67, 99, 0.95)',
        'nav': '#FDECDF',
        'forms': '#F78430'
      },
      backgroundImage: {
        'degradado': 'linear-gradient(135deg, rgba(255,138,0,0.443) 15%, rgba(246,246,246,1) 100%)',
        'fondo-card': 'linear-gradient(180deg, rgba(2,0,36,0) 41.5%, rgba(255,210,174,1) 41.5%, rgba(158,132,111,1) 250%) '
      },
      colors:{
        "blue-text": "#006BA0",
        "blue-title": "#034363",
        "btn-orange": "#FF8A00",
        "btn-blue": "#62A2C2",
        "orange-title": "#FF8A00",
        "orange-bar" : "#FFB905",
        "green-bar" : "#2EBF7E",
        "main-white" : "#f9f9f9",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      spacing: {
        522: "512px",
        370: "360px",
        201: "201px",
        110: "110px",
        42: "42px",
        340: "340px",
        407: "407px",
        327: "327px",
        888: "888px",
        45: "45px",
        182: "182px",
        107: "107px",
        92: "92px",
    },
    },
  },
  plugins: [],
}

