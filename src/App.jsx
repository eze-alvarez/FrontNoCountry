import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Campaign from './pages/Campaign/campaign';
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
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/campaign/:id' element={<Campaign/>} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/quienes-somos" element={<DonanteLogin />} />
                <Route path="/quienes-somos" element={<InstitucionLogin />} />
                <Route path="/quienes-somos" element={<About />} />
                <Route path="/campañas" element={<Campañas />} />
                <Route path="/quienes-somos" element={<CampañaCard />} /> */}
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}

export default App
