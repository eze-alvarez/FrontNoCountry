import { NavLink } from 'react-router-dom';
import logoBlue from '../../assets/Images/headerImg/logo azul.png';
import logoWhite from '../../assets/Images/headerImg/logo blanco.png'
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer({ isNavFooter }) {
  // Determina los estilos según el valor del prop isNavFooter
  const textColor = isNavFooter ? 'text-white' : 'blue-text';
  const logo = isNavFooter? logoWhite : logoBlue
  const distribution = isNavFooter ? 'items-start' : 'items-center'; 

  return (
    <footer className={`w-full flex flex-col ${distribution} h-[343px] pb-12`}>

    {/* Spacer to push the section down */}
    <div className="flex-grow"></div>
    {/* Logo in Mobile Menu */}
    <section className='w-[150px] items-start'>
      <NavLink to="/">
        <img src={logo} alt="logo" className='cursor-pointer w-[150px] h-[35px]' />
      </NavLink>
    
      {/* Contacto in Mobile Menu */}
      <section className="mt-auto w-[150px]">
        <h2 className="text-orange-title font-medium text-base mt-10">CONTACTO</h2>
        <p className={`text-sm mt-4 ${textColor}`}>Tel: (0232) 11234567</p>
        <p className={`text-sm mt-4 ${textColor}`}>contacto@donar</p>
    
        {/* Social Media Links */}
        <h2 className="text-orange-title font-medium text-base mt-4">REDES SOCIALES</h2>
        <ul className="flex gap-2 mt-4">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
              <FaInstagram size={25} className="cursor-pointer text-white" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
              <FaLinkedinIn size={25} className="cursor-pointer text-white" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
              <FaTwitter size={25} className="cursor-pointer text-white" />
            </a>
          </li>
        </ul>
      </section>
    </section>
    
  </footer>
  
  )
}
