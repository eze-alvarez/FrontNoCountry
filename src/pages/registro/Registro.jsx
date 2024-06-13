import { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

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
      window.location.href = "/";
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
      <div className="h-screen md:flex mt-16">
        <div className="bg-orange-400 h-36">
          <h1 className="text-white">Hola</h1>
        </div>
        <div className="flex justify-center items-center bg-white">
          <form onSubmit={handleOnSubmit} className="bg-white w-80">
            <h1 className="text-blue font-bold text-2xl text-left py-4">Registro</h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full ${errors.firstName ? "border-red-500" : ""}`}
                type="text"
                id="name"
                placeholder="Nombre"
                value={inputs.firstName}
                onChange={handleOnChange}
              />
            </div>
            {errors.firstName && <div className="text-red-500 text-sm mt-2">{errors.firstName}</div>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full ${errors.lastName ? "border-red-500" : ""}`}
                type="text"
                id="surname"
                placeholder="Apellido"
                value={inputs.lastName}
                onChange={handleOnChange}
              />
            </div>
            {errors.lastName && <div className="text-red-500 text-sm mt-2">{errors.lastName}</div>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full ${errors.password ? "border-red-500" : ""}`}
                type="password"
                id="password"
                placeholder="Password"
                value={inputs.password}
                onChange={handleOnChange}
              />
            </div>

            <Link to="/login" className="text-blue-500 ml-2">
              ¿Ya tienes una cuenta?
            </Link>
            <div className="text-red-500 text-sm mt-2">{errors.password}</div>
            <div className="flex justify-center items-center mt-6 bg-white">
            
                  <button className=" bg-orange-400 text-white font-bold py-2 px-4 rounded-2xl" type="submit" disabled={status.submitting}>
                    {status.submitting? "Registrando..." : "Registrarme"}
                  </button>
                </div>
          </form>
        </div>
      </div>
</>
  )
}

export default Register;


