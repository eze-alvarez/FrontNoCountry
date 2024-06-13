import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/UI/Loading/LoadingSpinner";
import Layout from "../layout/Layout";
import ScrollToTop from "../components/ScrollToTop/scrollToTop";
import CreateCampaign from "../pages/CreateCampaign/createCampaign";
/* Routes */

const Home = lazy(() => import("../pages/Home/Home"));
const Campaign = lazy(() => import("../pages/Campaign/campaign"));
const AllCampaigns = lazy(() => import("../pages/AllCampaigns/allCampaigns"));
const About = lazy(() => import("../pages/about/About"));
const Login = lazy(() => import("../pages/login/Login"));
const Registro = lazy(() => import("../pages/registro/Registro"));
const RegistroSolicitante = lazy(() => import("../pages/registroSolicitante/RegistroSolicitante"));
const Error = lazy(() => import("../pages/Error/NotFound/error"));

const MyRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>

        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign/:id" element={<Campaign />} />
            <Route path="/allCampaigns" element={<AllCampaigns />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/registroSolicitante" element={<RegistroSolicitante />} />
            <Route path="/quienes-somos" element={<About/>} />
            <Route path="/test" element={<CreateCampaign />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default MyRoutes;
