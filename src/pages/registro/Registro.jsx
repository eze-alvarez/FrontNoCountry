import { useState } from "react";

import axios from "axios";
import logoblanco from '../../assets/Images/commonImg/logoblanco.png';

const Register = () => {


  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim().length >= 8;
  };

  const validatePhone = (phone) => {
    // Expresión regular para validar un número de teléfono
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      });
      setErrors({
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        password: null,
      });
      history.push("/login");
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
    switch (id) {
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: !validateEmail(value) ? "Ingresa un email válido" : null,
        }));
        break;
      case "password":
        setErrors((prev) => ({
          ...prev,
          password: !validatePassword(value)
            ? "La contraseña debe tener al menos 8 caracteres"
            : null,
        }));
        break;
      case "phone":
        setErrors((prev) => ({
          ...prev,
          phone: !validatePhone(value) ? "Ingresa un número de teléfono válido" : null,
        }));
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // Validar todos los campos antes de enviar el formulario
    const isEmailValid = validateEmail(inputs.email);
    const isPasswordValid = validatePassword(inputs.password);
    const isPhoneValid = validatePhone(inputs.phone);

    if (
      isEmailValid &&
      isPasswordValid &&
      inputs.firstName.trim().length > 0 &&
      inputs.lastName.trim().length > 0 &&
      isPhoneValid
    ) {
      axios({
        method: "POST",
        url: "https://back-no-country-c18-03-m-node.fly.dev/api/v1/usera/register",
        data: inputs,
      })
        .then((response) => {
          handleServerResponse(true, "Usuario registrado exitosamente");
          console.log(response);
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    } else {
      setErrors({
        firstName: inputs.firstName.trim().length === 0 ? "El nombre no puede estar vacío" : null,
        lastName: inputs.lastName.trim().length === 0 ? "El apellido no puede estar vacío" : null,
        email: !isEmailValid ? "Ingresa un email válido" : null,
        phone: !isPhoneValid ? "Ingresa un número de teléfono válido" : null,
        password: !isPasswordValid ? "La contraseña debe tener al menos 8 caracteres" : null,
      });
      setStatus((prevStatus) => ({ ...prevStatus, submitting: false }));
    }
  };

  return (
    <>
      <div className="h-screen sm:flex sm:flex-col mt-14">
        <div className=" lg:flex justify-center items-center my-14">
          <div className="bg-forms h-36 lg:h-[36rem] lg:w-[45rem] content-center">

            <div className="mt-14">
              <h1><p className="text-white  "> Antes de seguir, <br /> queremos conocerte</p></h1>
              <img src={logoblanco} alt="logo" className=" h-[3rem] w-[12rem] lg:ml-[16rem] mt-[8rem]" />
            </div>
          </div>

          <div className="flex justify-center items-center bg-white lg:h-[36rem] lg:w-[33rem]  ">
            <form onSubmit={handleOnSubmit} className="bg-white w-80">
              <h1 className="text-blue-titel font-bold text-2xl text-left py-4">Ingresá tus datos</h1>

              <div className="flex gap-2  ">
                <section className="flex flex-col">
                  <div className="flex items-center border-[1px] py-2 px-3 rounded-2xl mb-4  border-blue-text">
                    <input
                      className={`pl-2 outline-none border-none w-full ${errors.firstName ? "border-red-500" : ""}`}
                      type="text"
                      id="name"
                      placeholder="Nombre"
                      value={inputs.firstName}
                      onChange={handleOnChange}
                    />
                  </div>
                  {errors.firstName && <div className="text-red-500  text-sm mt-2">{errors.firstName}</div>}
                </section>
                
                <section className="flex flex-col">
                  <div className="flex items-center border-[1px] py-2 px-3 rounded-2xl mb-4  border-blue-text">
                    <input
                      className={`pl-2 outline-none border-none w-full ${errors.lastName ? "border-red-500" : ""}`}
                      type="text"
                      id="surname"
                      placeholder="Apellido"
                      value={inputs.lastName}
                      onChange={handleOnChange}
                    />
                  </div>
                  {errors.lastName && <div className="text-red-500 text-sm ">{errors.lastName}</div>}
                </section>
              </div>
              <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
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
              <div className="flex items-center border-[1px]  border-blue-text py-2 px-3 rounded-2xl mb-4">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.password ? "border-red-500" : ""}`}
                  type="password"
                  id="Contraseña"
                  placeholder="Contraseña"
                  value={inputs.password}
                  onChange={handleOnChange}
                />
              </div>

              {/* <Link to="/login" className="text-blue-500 ml-2">
                ¿Ya tienes una cuenta?
              </Link> */}
              <div className="text-red-500 text-sm mt-2">{errors.password}</div>
              <div className="flex justify-center items-center mt-6 bg-white">

                <button className=" bg-forms text-white font-bold py-2 px-4 rounded-2xl" type="submit" disabled={status.submitting}>
                  {status.submitting ? "Registrando..." : "Registrarme"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;


