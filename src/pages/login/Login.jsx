import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoblanco from '../../assets/Images/commonImg/logoblanco.png';

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
      <div className="h-screen sm:flex sm:flex-col mt-14 ">
        <div className=" lg:flex justify-center items-center my-14 ">

          <div className="bg-forms h-36 lg:h-[36rem] lg:w-[45rem] content-center">

            <div className="mt-14">
              <h1 className="text-white  ">Iniciá tu sesión</h1>
              <img src={logoblanco} alt="logo" className=" h-[3rem] w-[12rem] lg:ml-[16rem] mt-[8rem]" />
            </div>
          </div>
          <div className="flex justify-center items-center bg-white lg:h-[36rem] lg:w-[33rem]  ">
            <form onSubmit={handleOnSubmit} className="bg-white w-80">
              <h1 className="text-blue-title font-bold text-2xl text-left py-4">Bienvenido</h1>
              <div className="flex items-center border-[1px] py-2 px-3 rounded-2xl  border-blue-text mb-4">
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
              <div className="flex items-center border-[1px] py-2 px-3  border-blue-text rounded-2xl">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.password ? "border-red-500" : ""}`}
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={inputs.password}
                  onChange={handleOnChange}
                />
              </div>
              {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
              <div className="flex">
                {/* <Link to="#">
                <p className="pl-6 py-4 text-blue text-sm">¿Olvidaste tu contraseña?</p>
              </Link> */}
                <Link to="/registro">
                <p className=" text-blue-text text-base mt-4 font-medium ml-28">Olvidaste tu contraseña?</p>
                </Link>
              </div>
              <div className="mt-4 pl-20">
                <button
                  type="submit"
                  className="block w-40 bg-forms h-42 rounded-full text-white rou font-semibold text-sm"
                  disabled={status.submitting}
                >
                  {status.submitting ? "Enviando..." : "Iniciar sesión"}
                </button>
              </div>
              <div className=" mt-4">
                <Link to="/registro">
                  <p className="text-blue-text text-sm text-center">¿Aún no tenés cuenta?</p>
                </Link>
              </div>
              <div className="pl-20 mt-4">
                <Link to="/RegistroSolicitante">
                  <p className="py-4 font-semibold text-blue-title">Solicitar Donación</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
