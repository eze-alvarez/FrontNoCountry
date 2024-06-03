import { NavLink } from 'react-router-dom';
import logoNavBlue from '../../assets/Images/headerImg/logo azul.png';
import { FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center justify-around h-[343px]  py-4'>
              {/* Logo in Mobile Menu */}
        <NavLink to="/" >
          <img src={logoNavBlue} alt="logo" className="cursor-pointer mx-auto w-[150px] h-[35px]  " />
        </NavLink>

        {/* Contacto in Mobile Menu */}
        <div>
          <h2 className='text-orange-title font-medium text-base'>CONTACTO</h2>
          <p className='text-sm mt-4'>Tel: (0232) 11234567</p>
          <p className='text-sm mt-4'>contacto@donar</p>

        {/* Social Media Links*/}
          <h2 className='text-orange-title font-medium text-base mt-4'>REDES SOCIALES</h2>
          <ul className='flex gap-2 mt-4'>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
                <FaInstagram size={25} className="cursor-pointer text-white " />
              </a>
            </li>
            <li className=''>
              <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
                <FaLinkedinIn size={25} className="cursor-pointer text-white " />
              </a>
            </li>
            <li className=''>
              <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 bg-btn-blue hover:bg-btn-orange w-[38px] h-[38px] rounded-lg">
                <FaTwitter size={25} className="cursor-pointer text-white " />
              </a>
            </li>
          </ul>
        </div>
    </footer>    
)
}
