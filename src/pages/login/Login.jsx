import { useState } from "react";
import { Link} from "react-router-dom";
import logo from '../../assets/Images/Forms/logo blanco.png'
import axios from "axios";

const Login = () => {


  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const validateEmail = (email) => {
    // Expresión regular para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Aquí puedes agregar más validaciones para la contraseña, como longitud mínima, caracteres especiales, etc.
    return password.trim().length > 0;
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: null,
        password: null,
      });
      history.push("/thanks");
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });

    // Validar el campo que se está modificando
    if (id === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !validateEmail(value) ? "Ingresa un email válido" : null,
      }));
    } else if (id === "password") {
      setErrors((prev) => ({
        ...prev,
        password: !validatePassword(value) ? "La contraseña no puede estar vacía" : null,
      }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // Validar todos los campos antes de enviar el formulario
    const isEmailValid = validateEmail(inputs.email);
    const isPasswordValid = validatePassword(inputs.password);

    if (isEmailValid && isPasswordValid) {
      axios({
        method: "POST",
        url: "https://back-no-country-c18-03-m-node.fly.dev/api/v1/users/login",
        data: inputs,
      })
        .then((response) => {
          handleServerResponse(true, "Bienvenido");
          console.log(response);
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    } else {
      setErrors({
        email: !isEmailValid ? "Ingresa un email válido" : null,
        password: !isPasswordValid ? "La contraseña no puede estar vacía" : null,
      });
      setStatus((prevStatus) => ({ ...prevStatus, submitting: false }));
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-56px-343px)] md:min-h-[calc(100vh-159px)] lg:h-[calc(100vh-159px)] md:flex pt-14 lg:pt-[68px] mt-4 md:mt-0  lg:px-0 ">
        
        <div className="bg-forms  h-[176px] px-7 flex flex-col justify-center md:items-center md:gap-20 md:w-1/2 lg:w-[650px] md:min-h-[calc(100vh-159px)] md:h-[442px] lg:h-[calc(100vh-159px-68px)]  lg:min-h-[442px] ">
          <h1 className="text-white text-left">Iniciá tu sesión</h1>
          <div className="hidden md:flex">
            <img src={logo} alt="logo donar" className=" md:h-[48px]" />
          </div>
        </div>

        {/* ------------arranca el form */}
        <div className=" mx-auto mt-9  px-4 md:mx-0 md:mt-0 md:w-1/2 lg:self-center bg-white flex flex-col justify-center lg:h-[calc(100vh-159px-68px)]">
          <form onSubmit={handleOnSubmit} className="mx-auto pt-4 min-h-[442px]  lg:h-[442px]  w-[337px] ">
            <h1 className="text-blue-title font-bold text-2xl text-left">Bienvenido</h1>

            <section className="mt-4  mb-11">
              <div className="flex items-center border-2  rounded-2xl">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.email ? "border-red-500" : ""}`}
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={inputs.email}
                  onChange={handleOnChange}
                />
              </div>

              {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}

              <div className="flex items-center mt-4 border-2   rounded-2xl">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.password ? "border-red-500" : ""}`}
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  value={inputs.password}
                  onChange={handleOnChange}
                />
              </div>
              {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
              <div className=" mt-4">
                <Link to="#">
                  <p className=" text-blue-text text-base font-medium text-right">Olvidaste tu contraseña?</p>
                </Link>
                {/* <Link to="/registro">
                  <p className="py-4 text-blue text-sm">¿No tienes cuenta? Crea una</p>
                </Link> */}
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className=" bg-forms px-3 xl:px-4 py-2 rounded-full  tracking-wider"
                  disabled={status.submitting}
                >
                  <p className="text-white text-xs xl:text-base font-medium">Iniciar sesión</p>
                </button>
              </div>

              <div className=" mt-4">
                {/* <Link to="#">
                  <p className=" text-blue-text text-base font-medium text-right">Olvidaste tu contraseña?</p>
                </Link> */}
                <Link to="/registro">
                  <p className="text-blue-text text-sm text-center">¿Aún no tenés cuenta?</p>
                </Link>
              </div>

              <div className="mt-4">
                <Link to="/RegistroSolicitante">
                  <p className="font-semibold text-blue-title text-center">Solicitar Donación</p>
                </Link>
              </div>
            </section>

            

            
          </form>
        </div>

      </div>
    </>
  );
};

export default Login;
