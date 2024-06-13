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
                    className={`h-screen  sm:flex-col mt-14 ${
                         showPopUp ? "hidden" : "flex"
                    }`}
               >
                    <div className=" lg:flex justify-center w-full items-center my-14 ">
                         <div className="bg-forms h-36 lg:h-[36rem] lg:w-[45rem] content-center">
                              <div className="mt-14">
                                   <h1 className="text-white  ">
                                        Iniciá tu sesión
                                   </h1>
                                   <img
                                        src={logoblanco}
                                        alt="logo"
                                        className=" h-[3rem] w-[12rem] lg:ml-[16rem] mt-[8rem]"
                                   />
                              </div>
                         </div>


                         <div className="flex justify-center items-center bg-white lg:h-[36rem] lg:w-[33rem]  ">
                              <form
                                   onSubmit={handleSubmit}
                                   className="bg-white w-80"
                              >
                                   <h1 className="text-blue-title font-bold text-2xl text-left py-4">
                                        Bienvenido
                                   </h1>
                                   <div className="flex items-center border-[1px] py-2 px-3 rounded-2xl  border-blue-text mb-4">
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


                                   <div className="flex items-center border-[1px] py-2 px-3  border-blue-text rounded-2xl">
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
                                             <p className="py-4 text-blue-text text-sm ml-28">
                                                  Olvidaste tu contraseña?
                                             </p>
                                        </Link>
                                   </div>
                                   <div className="mt-4 pl-20">
                                        <button
                                             type="submit"
                                             className="block w-40 bg-forms h-42 rounded-full text-white rou font-semibold text-sm"
                                        >
                                             {/* {status.submitting ? "Enviando..." : "Iniciar sesión"} */}
                                             Iniciar Sesión
                                        </button>
                                   </div>
                                   <div className=" mt-4">
                                        <Link to="/registro">
                                             <p className="text-blue-text text-sm text-center">
                                                  ¿Aún no tenés cuenta?
                                             </p>
                                        </Link>
                                   </div>
                                   <div className="pl-20 pb-6 mt-4">
                                        <Link to="/RegistroSolicitante">
                                             <p className="py-4 font-semibold text-blue-title">
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
