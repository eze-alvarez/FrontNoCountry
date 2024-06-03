import { NavLink } from 'react-router-dom';
import logoNavBlue from '../../assets/logo azul.png';
import logoNavWhite from '../../assets/logo blanco.png';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaWindowClose, FaBars } from 'react-icons/fa';
import { VscAccount } from "react-icons/vsc";

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-14   z-30 top-0 text-blue-title">
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
          ? "fixed left-0 top-0 z-20 w-[65%] sm:hidden h-screen bg-blue-Nav backdrop-blur-18 flex flex-col justify-between p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
      }>
        
        {/* Close Button */}
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer border-2 border-white rounded-md p-1">
            <FaWindowClose size={25} className='text-white'/>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-col py-4 font-bold tracking-wider">
          <ul className='flex flex-col gap-3'>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
              <li className="">Iniciar sesión</li>
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
              <li className="">Home</li>
            </NavLink>
            <NavLink to="/quienes-somos" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
              <li className="">Quiénes somos</li>
            </NavLink>
            <NavLink to="/campañas" className={({ isActive }) => isActive ? "text-orange-500" : "text-white"} onClick={() => setMenuOpen(false)}>
              <li className=" ">Campañas</li>
            </NavLink>  
          </ul>
        </div>

        {/* Logo in Mobile Menu */}
        <NavLink to="/" >
          <img src={logoNavWhite} alt="logo" width={150} height={35} className="cursor-pointer" />
        </NavLink>

        {/* Contacto in Mobile Menu */}
        <div>
          <h2 className='text-orange-title font-medium text-base'>CONTACTO</h2>
          <p className='text-sm mt-4 text-white'>Tel: (0232) 11234567</p>
          <p className='text-sm mt-4 text-white'>contacto@donar</p>

        {/* Social Media Links*/}
          <h2 className='text-orange-title font-medium text-base mt-4'>REDES SOCIALES</h2>
          <ul className='flex gap-2 mt-4'>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue w-[38px] h-[38px] rounded-lg">
                <FaInstagram size={25} className="cursor-pointer text-white hover:fill-btn-orange" />
              </a>
            </li>
            <li className=''>
              <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue w-[38px] h-[38px] rounded-lg">
                <FaLinkedinIn size={25} className="cursor-pointer text-white hover:fill-btn-orange" />
              </a>
            </li>
            <li className=''>
              <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue w-[38px] h-[38px] rounded-lg">
                <FaTwitter size={25} className="cursor-pointer text-white hover:fill-btn-orange" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
