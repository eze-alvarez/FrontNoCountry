import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Campaign from './pages/Campaign/campaign';
import AllCampaigns from './pages/AllCampaigns/allCampaigns';
import { Login } from "./pages/login/Login"
import { Registro } from './pages/registro/Registro'
import {RegistroSolicitante} from './pages/registroSolicitante/RegistroSolicitante'
// import About from './pages/About'
// import Campañas from './pages/Campañas'
// import CampañaCard from "./pages/CampañaCard"

function App() {

  return (
    <div className="bg-degradado min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/campaign/:id' element={<Campaign />} />
          <Route path='/allCampaigns' element={<AllCampaigns />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/registroSolicitante" element={<RegistroSolicitante />} />
                {/*<Route path="/quienes-somos" element={<About />} />
                <Route path="/campañas" element={<Campañas />} />
                <Route path="/quienes-somos" element={<CampañaCard />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
