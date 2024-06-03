import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'

// import Footer from './components/footer/Footer';
// import About from './pages/About'
// import Campañas from './pages/Campañas'
// import DonanteLogin from './pages/DonanteLogin'
// import InstitucionLogin from './pages/InstitucionLogin'
// import Login from "./pages/Login"
// import CampañaCard from "./pages/CampañaCard"

function App() {

  return (
    <Router>
      {/* <Routes> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
                <Route path="/quienes-somos" element={<DonanteLogin />} />
                <Route path="/quienes-somos" element={<InstitucionLogin />} />
                <Route path="/quienes-somos" element={<About />} />
                <Route path="/campañas" element={<Campañas />} />
                <Route path="/quienes-somos" element={<CampañaCard />} /> /}
      </Routes>
      {/ <Footer /> */}
    </Router>
  )
}

export default App