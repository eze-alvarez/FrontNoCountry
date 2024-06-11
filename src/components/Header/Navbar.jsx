import { NavLink } from 'react-router-dom';
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
    <nav className="fixed w-full h-14   z-30 top-0 text-blue-title bg-nav">
      <div className="container mx-auto xl:max-w-5xl 2xl:max-w-7xl flex justify-between items-center h-full w-full px-8">


        {/* Logo */}
        <NavLink to="/login" className="cursor-pointer font-bold sm:hidden">
          <VscAccount size={25}/>
        </NavLink>

        {/* Logo */}
        <NavLink to="/" className="cursor-pointer font-bold">
          <img src={logoNavBlue} alt="mano" className="h-[22px] w-[95px]  cursor-pointer" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden font-semibold tracking-wider landscape:flex sm:flex">
          <ul className="flex gap-x-3 text-sm xl:text-xl xl:gap-x-5">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
              <li className="uppercase hover:scale-[1.1]">Home</li>
            </NavLink>
            <NavLink to="/quienes-somos" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
              <li className="uppercase hover:scale-[1.1]">¿Quiénes somos?</li>
            </NavLink>
            <NavLink to="/campañas" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
              <li className="uppercase hover:scale-[1.1]">Campañas</li>
            </NavLink>
            <NavLink to="/contactanos" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"}>
              <li className="uppercase hover:scale-[1.1]">Contactanos</li>
            </NavLink>
          </ul>
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