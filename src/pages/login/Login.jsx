import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/actions";
import logoblanco from "../../assets/Images/commonImg/logoblanco.png";
import PopUp from "../../components/PopUp/PopUp";

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showPopUp, setShowPopUp] = useState(false);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const isAuthenticated = useSelector((state) => state.isAuthenticated);

     useEffect(() => {
          if (isAuthenticated) {
               navigate("/");
          }
     }, [isAuthenticated, navigate]);

     const handleSubmit = (event) => {
          event.preventDefault();
          dispatch(login({ email, password }))
               .then((response) => {
                    
                    if (response.success) {
                      setShowPopUp(true);
                         setTimeout(() => {
                              navigate("/");
                         }, 3000);
                    } else {
                         // Mostrar mensajes de error unificados en caso de fallo
                         const errorMessage = Array.isArray(response.message)
                              ? response.message.join(", ")
                              : response.message;
                         alert("Login failed: " + errorMessage + " " + response.message);
                         // alert("Login failed: " + response.message);
                    }
               })
               .catch((error) => {
                    // Mejor manejo de errores en caso de que error.response no esté presente
                    const message =
                         error.response && error.response.data.message
                              ? Array.isArray(error.response.data.message)
                                   ? error.response.data.message
                                          .map((err) => err.message)
                                          .join(", ")
                                   : error.response.data.message
                              : "An unexpected error occurred";
                    alert("An error occurred: " + message);
                    // alert("An error occurred: " + error.response.data.message);
               });
     };

     return (
          <>
               <div
                    className={` pt-14 lg:pt-[68px] sm:flex-col  bg-purple-400  ${
                         showPopUp ? "hidden" : "flex"
                    }  md:h-[calc(100vh-159px)]
                    md:landscape:h-auto lg:landscape:h-[calc(100vh-159px)] lg:landscape:pt-[88px] lg:landscape:pb-[20px]`}
               >
                    <div className=" w-full mt-4 mb-11 lg:mt-0 lg:mb-0 sm:flex bg-green-300 md:h-full">
                         <div className="bg-forms h-[176px] flex flex-col justify-center items-center  sm:flex-grow sm:h-auto landscape:justify-start landscape:pt-16 sm:landscape:gap-10 md:gap-20 md:landscape:justify-center md:landscape:pt-0 lg:landscape:gap-24">

                              <h1 className="text-white text-left font-bold text-[24px]">
                                   Iniciá tu sesión
                              </h1>

                              <div>
                                   <img
                                   src={logoblanco}
                                   alt="logo"
                                   className=" hidden landscape:sm:flex md:flex h-[3rem] "/>
                              </div>
                         </div>


                         <div className=" bg-yellow-200 mt-9 sm:mt-0 md:w-[473px] landscape:md:w-[400px] md:landscape:py-12 md:flex md:items-center lg:landscape:py-0">
                              <form
                                   onSubmit={handleSubmit}
                                   className=" w-[300px] h-[442px] bg-red-300 px-4 mx-auto pt-4 md:w-[337px]"
                              >
                                   <h1 className="text-blue-title font-bold text-2xl text-left">
                                        Bienvenido
                                   </h1>
                                   <div className="flex items-center border-[1px] py-2 px-3 mt-4 rounded-2xl  border-blue-text ">
                                        <input
                                             className={`pl-2 outline-none border-none w-full`}
                                             type="email"
                                             value={email}
                                             placeholder="Email"
                                             onChange={(event) =>
                                                  setEmail(event.target.value)
                                             }
                                             required
                                        />
                                   </div>


                                   <div className="flex items-center border-[1px] py-2 px-3 mt-4 border-blue-text rounded-2xl">
                                        <input
                                             className={`pl-2 outline-none border-none w-full`}
                                             type="password"
                                             placeholder="Password"
                                             value={password}
                                             onChange={(event) =>
                                                  setPassword(
                                                       event.target.value
                                                  )
                                             }
                                             required
                                        />
                                   </div>
                                   <div className="flex">
                                        {/* <Link to="#">
                <p className="pl-6 py-4 text-blue text-sm">¿Olvidaste tu contraseña?</p>
              </Link> */}

                                        <Link to="/registro">
                                             <p className="mt-4 text-blue-text text-sm ml-28">
                                                  Olvidaste tu contraseña?
                                             </p>
                                        </Link>
                                   </div>
                                   <div className="my-6 ">
                                        <button
                                             type="submit"
                                             className="block w-40 bg-forms h-42 rounded-full text-white font-semibold text-sm mx-auto"
                                        >
                                             {/* {status.submitting ? "Enviando..." : "Iniciar sesión"} */}
                                             Iniciar Sesión
                                        </button>
                                   </div>
                                   <div>
                                        <Link to="/registro">
                                             <p className="text-blue-text text-sm text-center">
                                                  ¿Aún no tenés cuenta?
                                             </p>
                                        </Link>
                                   </div>
                                   <div className="mt-6">
                                        <Link to="/RegistroSolicitante" >
                                             <p className="font-semibold text-blue-title text-center">
                                                  Solicitar Donación
                                             </p>
                                        </Link>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               {showPopUp && (
                    <PopUp
                         title={`Login Exitoso`}
                         message="Bienvenido de nuevo"
                    />
               )}
          </>
     );

};

export default Login;
