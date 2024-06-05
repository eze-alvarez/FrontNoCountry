import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingSpinner from './components/UI/Loading/LoadingSpinner';

// Lazy load para rutas y componentes
const Home = lazy(() => import('./pages/Home/Home'));
const Navbar = lazy(() => import('./components/Header/Navbar'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Campaign = lazy(() => import('./pages/Campaign/campaign'));
const AllCampaigns = lazy(() => import('./pages/AllCampaigns/allCampaigns'));

// const About = lazy(() => import('./pages/About'));
// const Campañas = lazy(() => import('./pages/Campañas'));
// const DonanteLogin = lazy(() => import('./pages/DonanteLogin'));
// const InstitucionLogin = lazy(() => import('./pages/InstitucionLogin'));
// const Login = lazy(() => import('./pages/Login'));
// const CampañaCard = lazy(() => import('./pages/CampañaCard'));

function App() {
  return (
    <div className="bg-degradado min-h-screen">
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign/:id" element={<Campaign />} />
            <Route path="/allCampaigns" element={<AllCampaigns />} />
            {/* Otras rutas comentadas...
                <Route path="/login" element={<Login />} />
                <Route path="/quienes-somos" element={<DonanteLogin />} />
                <Route path="/quienes-somos" element={<InstitucionLogin />} />
                <Route path="/quienes-somos" element={<About />} />
                <Route path="/campañas" element={<Campañas />} />
                <Route path="/quienes-somos" element={<CampañaCard />} /> */}
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
