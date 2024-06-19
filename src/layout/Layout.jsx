import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Resolution from "../pages/Error/Resolution/resolution";

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-degradado min-h-screen max-[319px]:hidden">
                <Navbar />
                <div className="max-w-1120 min-h-screen m-auto min-w-[320px] ">
                    {children}
                </div>
                <Footer />
            </div>
            <Resolution />
        </>
    )
}

export default Layout;
