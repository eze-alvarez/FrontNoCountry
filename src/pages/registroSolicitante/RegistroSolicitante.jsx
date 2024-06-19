import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerEntiti } from "../../redux/actions/actions";
import logoblanco from "../../assets/Images/commonImg/logoblanco.png";
import PopUp from "../../components/PopUp/PopUp";

const RegistroSolicitante = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [showPopUp, setShowPopUp] = useState(false);

     const [formData, setFormData] = useState({
          name: "",
          surname: "",
          email: "",
          password: "",
          bankInformation: "",
          entityName: "",
          /* isInstitution: false, */
     });

     const handleChange = (event) => {
          setFormData({
               ...formData,
               [event.target.name]: event.target.value,
          });
     };

     const handleSubmit = (event) => {
          event.preventDefault();

          dispatch(registerEntiti(formData))
               .then((response) => {
                    if (response.success) {
                         setShowPopUp(true); // Mostrar PopUp después del registro exitoso
                         setTimeout(() => {
                              navigate("/createCampaign"); // Redirigir después de 3 segundos
                         }, 2000);
                         
                    } else {
                      
                         // Mostrar mensaje de error específico si no fue exitoso
                         const errorMessage = Array.isArray(response.message)
                              ? response.message.join(", ")
                              : response.message;
                         alert("Error en el registro: " + errorMessage);
                    }
               })
               .catch((error) => {
                    // Manejar errores de red, servidor, etc.
                    const message =
                         error.response && error.response.data.message
                              ? Array.isArray(error.response.data.message)
                                   ? error.response.data.message
                                          .map((err) => err.message)
                                          .join(", ")
                                   : error.response.data.message
                              : "Ocurrió un error inesperado";
                    alert("Error: " + message);
               });
     };

     return (
          <>
               <div
                    className={`h-screen sm:flex-col mt-14 ${
                         showPopUp ? "hidden" : "flex"
                    }`}
               >
                    <div className=" lg:flex justify-center items-center my-14 ">
                         <div className="bg-forms h-36 lg:h-[36rem] lg:w-[45rem] content-center">
                              <div className="mt-14">
                                   <h1>
                                        <p className="text-white  ">
                                             {" "}
                                             Antes de seguir, <br /> queremos
                                             conocerte
                                        </p>
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
                                        Ingresá tus datos
                                   </h1>
                                   <div className="flex gap-2">
                                        <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                                             <input
                                                  className={`pl-2 outline-none border-none w-full`}
                                                  type="text"
                                                  name="name"
                                                  placeholder="Nombre"
                                                  value={formData.name}
                                                  onChange={handleChange}
                                                  required
                                             />
                                        </div>

                                        <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                                             <input
                                                  className={`pl-2 outline-none border-none w-full`}
                                                  type="text"
                                                  name="surname"
                                                  placeholder="Apellido"
                                                  value={formData.surname}
                                                  onChange={handleChange}
                                                  required
                                             />
                                        </div>
                                   </div>

                                   <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                                        <input
                                             className={`pl-2 outline-none border-none w-full`}
                                             type="text"
                                             name="email"
                                             placeholder="Emails"
                                             value={formData.email}
                                             onChange={handleChange}
                                             required
                                        />
                                   </div>

                                   <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                                        <input
                                             className={`pl-2 outline-none border-none w-full`}
                                             type="text"
                                             name="bankInformation"
                                             placeholder="Cbu"
                                             value={formData.bankInformation}
                                             onChange={handleChange}
                                             required
                                        />
                                   </div>

                                   <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                                        <input
                                             className={`pl-2 outline-none border-none w-full`}
                                             type="password"
                                             name="password"
                                             placeholder="Contraseña"
                                             value={formData.password}
                                             onChange={handleChange}
                                             required
                                        />
                                   </div>

                                   <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                                        <input
                                             className={`pl-2 outline-none border-none w-full`}
                                             type="text"
                                             name="entityName"
                                             placeholder="Nombre de la institución"
                                             value={formData.entityName}
                                             onChange={handleChange}
                                             required
                                        />
                                   </div>
                                   {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">

              <input
                className={`pl-2 outline-none border-none w-full`}
                type="checkbox"
                name="isInstitution"
                placeholder="¿Es una institución?"
                value={inputs.isInstitution}
                onChange={handleOnChange}
              />
            </div> */}

                                   <div className="flex justify-center items-center my-4 bg-white">
                                        <button
                                             className=" bg-forms text-white font-bold py-2 px-4 rounded-2xl"
                                             type="submit"
                                        >
                                             {/* {status.submitting ? "Registrando..." : "Registrarme"} */}
                                             Registrarme
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               {/* PopUp */}
               {showPopUp && (
                    <PopUp
                         title={formData.entityName}
                         message="Gracias por unirte"
                         closePopUp={() => setShowPopUp(false)}
                    />
               )}
          </>
     );

};

export default RegistroSolicitante;
