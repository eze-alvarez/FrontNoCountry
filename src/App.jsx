import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/header';
// import About from './pages/About'
// import Campañas from './pages/Campañas'
// import DonanteLogin from './pages/DonanteLogin'
// import InstitucionLogin from './pages/InstitucionLogin'
// import Login from "./pages/Login"
// import CampañaCard from "./pages/CampañaCard"

function App() {

  return (
    <div className="bg-degradado min-h-screen">
      <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/quienes-somos" element={<DonanteLogin />} />
                <Route path="/quienes-somos" element={<InstitucionLogin />} />
                <Route path="/quienes-somos" element={<About />} />
                <Route path="/campañas" element={<Campañas />} />
                <Route path="/quienes-somos" element={<CampañaCard />} /> */}
            </Routes>
        </Router>
    </div>
  )
}

export default App
