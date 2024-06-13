import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/headerImg/logo azul.png";
import sun from "../../../assets/Images/commonImg/Pop up .png";
const Error = () => {
     return (
          <div className="bg-main-white h-screen flex flex-col items-center justify-end">
               <div className="w-full mb-16 my-auto text-center flex flex-col justify-center items-center ">
                    <h1>¡Lo sentimos!</h1>
                    <h1 className=" w-56 mt-6">
                         No encontramos la página que estas buscando
                    </h1>
                    <div className="w-56 my-8 ">
                         <img
                              src={Logo}
                              alt="Logo"
                              className="object-cover w-full h-full"
                         />
                    </div>
                    <Link to={"/"}>
                         <button className="bg-btn-orange h-42 w-110 rounded-full text-white font-bold text-xs py-2 px-4">
                              Ir a inicio
                         </button>
                    </Link>
               </div>
               <div className="w-full max-w-[400px] h-48">
                    <img
                         src={sun}
                         alt="imagen de sol"
                         className="object-cover w-full h-full"
                    />
               </div>
          </div>
     );
};

export default Error;
