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
        'degradado': 'linear-gradient(135deg, rgba(251,226,196,0.6783963585434174) 0%, rgba(245,245,244,1) 100%)',
        'fondo-card': 'linear-gradient(180deg, rgba(2,0,36,0) 41.5%, rgba(255,210,174,1) 41.5%, rgba(158,132,111,1) 250%) '
      },
      boxShadow:{
        'card-shadow':'30px 45px 48px -49px rgba(0,0,0,.2)',
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
        346: "346px",
        201: "201px",
        300: "300px",
        110: "110px",
        42: "42px",
        340: "340px",
        370: "370px",
        407: "407px",
        327: "327px",
        888: "888px",
        750: "750px",
        45: "45px",
        182: "182px",
        107: "107px",
        92: "92px",
        1120: "1120px",
        344: "344px",
        900: "900px",
    },
    
    },
  },
  plugins: [],
}

