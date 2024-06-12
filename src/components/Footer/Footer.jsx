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
    <footer className={`w-full flex flex-col ${distribution} h-[343px] py-12  sm:h-[159px] sm:flex-row sm:py-0`}>

    {/* Spacer to push the section down */}
    <div className="flex-grow sm:hidden"></div>
    {/* Logo in Mobile Menu */}
    <section className='w-[150px]   sm:flex sm:w-full sm:justify-between sm:px-6 md:px-20  xl:px-28 xl:max-w-[1280px] xl:mx-auto'>

      <NavLink to="/" className=" self-center">
        <img src={logo} alt="logo" className='cursor-pointer h-[32px] sm:h-[53px]' />
      </NavLink>
    
      {/* Contacto in Mobile Menu */}
      <section className=" sm:-order-1 ">
        <h2 className="text-orange-title tracking-wider font-bold text-base mt-5 sm:mt-0">CONTACTO</h2>
        <p className={`text-sm mt-4 sm:text-base ${textColor}`}>Tel: (0232) 11234567</p>
        <p className={`text-sm mt-4 sm:text-base ${textColor}`}>contacto@donar</p>
      </section>
    
        {/* Social Media Links */}
      <section className="mx-auto w-[150px] sm:mx-0 sm:flex sm:flex-col sm:items-center ">
        <h2 className="text-orange-title tracking-wider font-bold text-base mt-4 sm:mt-0">REDES SOCIALES</h2>
        <ul className="flex gap-2 mt-4 sm:gap-3">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center  bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
              <FaInstagram size={25} className="cursor-pointer text-white" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
              <FaLinkedinIn size={25} className="cursor-pointer text-white" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
              <FaTwitter size={25} className="cursor-pointer text-white" />
            </a>
          </li>
        </ul>
      </section>

    </section>
    
  </footer>
  
  )
}
