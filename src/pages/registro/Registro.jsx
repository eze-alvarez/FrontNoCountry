
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { registerUser } from "../../redux/actions/actions";
import logoblanco from '../../assets/Images/commonImg/logoblanco.png';
import PopUp from "../../components/PopUp/PopUp";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [showPopUp, setShowPopUp] = useState(false);



  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(formData))
      .then((response) => {
        if (response.success) {
          // alert("Registration successful!");
          setShowPopUp(true);
          // Después de 5 segundos, redirige al usuario al login
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          // Mostrar mensajes de error unificados en caso de fallo
          const errorMessage = Array.isArray(response.message)
            ? response.message.join(', ')
            : response.message;
          alert("Registration failed: " + errorMessage);
        }
      })
      .catch((error) => {
        // Mejor manejo de errores en caso de que error.response no esté presente
        const message = error.response && error.response.data.message
          ? Array.isArray(error.response.data.message)
            ? error.response.data.message.map(err => err.message).join(', ')
            : error.response.data.message
          : "An unexpected error occurred";
        alert("An error occurred: " + message);
      });
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // Si el registro se realizó correctamente, muestra el PopUp por 5 segundos
     
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <>
      <div
        className={` pt-14 lg:pt-[68px] sm:flex-col   ${
          showPopUp ? "hidden" : "flex"
     }  md:h-[calc(100vh-159px)]
     md:landscape:h-auto lg:landscape:h-[calc(100vh-159px)] lg:landscape:pt-[88px] lg:landscape:pb-[20px]`}
      >
        <div className="w-full mt-4 mb-11 lg:mt-0 lg:mb-0 sm:flex md:h-full">
          <div className="bg-forms h-[176px] flex flex-col justify-center items-center  sm:flex-grow sm:h-auto landscape:justify-start landscape:pt-16 sm:landscape:gap-10 md:gap-20 lg:landscape:justify-center lg:landscape:pt-0 lg:landscape:gap-24">
            <h1 className="text-white font-bold text-[24px] text-center">
            Antes de seguir,<br />
            queremos conocerte.
            </h1>

            <div>
              <img
                src={logoblanco}
                alt="logo"
                className=" hidden landscape:sm:flex md:flex h-[3rem] "
              />
            </div>
          </div>


          <div className="bg-main-white mt-9 sm:mt-0 md:w-[473px] landscape:md:w-[400px] md:landscape:py-12 md:flex md:items-center lg:landscape:py-0">
            <form
              onSubmit={handleSubmit}
              className=" w-[300px] h-[418px] bg-white px-4 mx-auto pt-4 md:w-[337px]"
            >
              <h1 className="text-blue-title font-bold text-2xl text-left ">
                Ingresá tus datos
              </h1>
              <div className="flex gap-2 mt-4">
                <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl">
                  <input
                    className={"pl-2 outline-none border-none w-full"}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl ">
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

              <div className="flex items-center border-[1px] mt-4  border-blue-text py-2 px-3 rounded-2xl ">
                <input
                  className={`pl-2 outline-none border-none w-full`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center border-[1px] mt-4 border-blue-text py-2 px-3 rounded-2xl">
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
              {/* <Link to="/login" className="text-blue-500 ml-2">
              ¿Ya tienes una cuenta?
            </Link> */}
              <div className="flex justify-center items-center mt-6 bg-white">
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
      {/* Mostrar PopUp si showPopUp es true */}
      {showPopUp && (
        <PopUp
          title={`${formData.name} ${formData.surname}`}
          message="Gracias por unirte a"
          closePopUp={() => setShowPopUp(false)}
        />
      )}
    </>
  );
};



export default Register;

