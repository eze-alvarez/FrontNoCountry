
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
            navigate("/login");
          }, 2000);
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

      <div className={`h-screen sm:flex sm:flex-col mt-14 ${showPopUp? "hidden": "flex" }`}>
        <div className=" lg:flex justify-center items-center my-14 w-full">

          <div className="bg-forms h-36 lg:h-[36rem] lg:w-[45rem] content-center">
          <div className="mt-14">
              <h1><p  className="text-white  "> Antes de seguir, <br/> queremos conocerte</p></h1>
              <img src={logoblanco} alt="logo" className=" h-[3rem] w-[12rem] lg:ml-[16rem] mt-[8rem]" />
            </div>
          </div>

          <div className="flex justify-center items-center bg-white lg:h-[36rem] lg:w-[33rem]  ">
          <form onSubmit={handleSubmit} className="bg-white w-80 mt-[4rem]">

            <h1 className="text-blue-title font-bold text-2xl text-left py-4">Ingresá tus datos</h1>
              <div className="flex gap-2">
              <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
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
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* <Link to="/login" className="text-blue-500 ml-2">
              ¿Ya tienes una cuenta?
            </Link> */}
            <div className="flex justify-center items-center mb-32 mt-6 bg-white">
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

