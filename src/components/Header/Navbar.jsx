import { Link, NavLink } from 'react-router-dom';
import logoNavBlue from '../../assets/Images/headerImg/logo azul.png';
import {FaWindowClose, FaBars } from 'react-icons/fa';
import { VscAccount } from "react-icons/vsc";

import { useState } from 'react';
import Footer from '../Footer/Footer';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="fixed w-full h-14 lg:h-[68px]  z-30 top-0 text-blue-title bg-nav  ">
      <div className=" mx-auto  2xl:max-w-[1400px] flex justify-between items-center h-full w-full px-8 xl:px-20">


        {/* Logo */}
        <NavLink to="/login" className="cursor-pointer font-bold sm:hidden">
          <VscAccount size={25}/>
        </NavLink>

        {/* Logo */} 
        <NavLink to="/" className="cursor-pointer font-bold">
          <img src={logoNavBlue} alt="mano" className="h-[22px]  md:h-[37px] md:w-auto cursor-pointer" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden font-medium tracking-wider landscape:flex sm:flex sm:gap-4 md:gap-14 xl:gap-36">
          <ul className="flex items-center sm:gap-3 md:gap-5 xl:gap-x-20  text-xs xl:text-base ">
            
            <NavLink to="/quienes-somos" className={({ isActive }) => isActive ? "text-orange-500" : "text-blue-title"}>
              <li className=" hover:scale-[1.1]">¿Quiénes somos?</li>
            </NavLink>
            <NavLink to="/campañas" className={({ isActive }) => isActive ? "text-orange-500" : "text-blue-title"}>
              <li className=" hover:scale-[1.1]">Campañas</li>
            </NavLink>
            <NavLink to="/contactanos" className={({ isActive }) => isActive ? "text-orange-500" : "text-blue-title"}>
              <li className=" hover:scale-[1.1]">Contactanos</li>
            </NavLink>
          </ul>
          <NavLink to="/login">
          <button className="  bg-white  rounded-full   px-3 xl:px-4 py-2   hidden sm:grid sm:place-content-center tracking-wider">
                <p className="text-blue-title text-xs xl:text-base font-medium">Iniciar sesión</p>
          </button>
          </NavLink>
        </div>
        

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          <div className="border-2 border-blue-title rounded-md p-2">
            <FaBars size={15} className='text-blue-title'/>
          </div>
        </div>

        
      </div>





      {/* Mobile Menu */}
      <div className={
        menuOpen
          ? "fixed left-0 top-0 z-20 w-[269px] sm:hidden h-screen bg-blue-Nav backdrop-blur-18 ease-in duration-500 flex flex-col justify-between pl-14 pr-6"
          : "fixed left-[-100%] top-0 h-screen ease-in duration-500 flex flex-col justify-between pl-14 pr-6"
      }>

        

        <section className='flex flex-col justify-center '>
          {/* Close Button */}
          <div className="flex w-full h-14 items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer border-2 border-white rounded-md p-1">
              <FaWindowClose size={25} className='text-white'/>
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex-col font-bold tracking-wider mt-10">
            <ul className='flex flex-col'>
              <NavLink to="/login" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
                <li className="">Iniciar sesión</li>
              </NavLink>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
                <li className="mt-11">Home</li>
              </NavLink>
              <NavLink to="/quienes-somos" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
                <li className="mt-11">Quiénes somos</li>
              </NavLink>
              <NavLink to="/allCampaigns" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
                <li className=" mt-11">Campañas</li>
              </NavLink>  
            </ul>
          </div>

          
        </section>
        <section className='' >
          <Footer isNavFooter={true}/>
        </section>
      </div>
    </nav>
  );
}