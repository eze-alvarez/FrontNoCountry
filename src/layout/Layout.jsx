import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div className="bg-degradado min-h-screen">
            <Navbar />
               {children}
            <Footer />
        </div>
    );
};

export default Layout;
