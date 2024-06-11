import { useState } from "react";
import axios from "axios";
import logoblanco from '../../assets/Images/commonImg/logoblanco.png';

const RegistroSolicitante = () => {


  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    bankInformation: "",
    password: "",
    entityName: "",
    isInstitution: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    bankInformation: null,
    password: null,
    entityName: null,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim().length >= 8;
  };


  const validatebankInformation = (bankInformation) => {
    // Agrega la validación de bankInformation aquí
    return bankInformation.trim().length === 22;
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        surname: "",
        email: "",
        bankInformation: "",
        password: "",
        entityName: "",
        isInstitution: false,
      });
      setErrors({
        name: null,
        surname: null,
        email: null,
        bankInformation: null,
        password: null,
        entityName: null,
      });
      history.push("/login");
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    const { id, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
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
      case "bankInformation":
        setErrors((prev) => ({
          ...prev,
          bankInformation: !validatebankInformation(value) ? "Ingresa un bankInformation válido" : null,
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
    const isbankInformationValid = validatebankInformation(inputs.bankInformation);

    if (
      inputs.name.trim().length > 0 &&
      inputs.surname.trim().length > 0 &&
      isEmailValid &&
      isPasswordValid &&
      isbankInformationValid &&
      (inputs.isInstitution ? inputs.entityName.trim().length > 0 : true)
    ) {
      axios({
        method: "POST",
        url: "https://back-no-country-c18-03-m-node.fly.dev/api/v1/users/registerSolicit",
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
        name: inputs.name.trim().length === 0 ? "El nombre no puede estar vacío" : null,
        surname: inputs.surname.trim().length === 0 ? "El apellido no puede estar vacío" : null,
        email: !isEmailValid ? "Ingresa un email válido" : null,
        bankInformation: !isbankInformationValid ? "Ingresa un bankInformation válido" : null,
        password: !isPasswordValid ? "La contraseña debe tener al menos 8 caracteres" : null,
        entityName:
          inputs.isInstitution && inputs.entityName.trim().length === 0
            ? "El nombre de la institución no puede estar vacío"
            : null,
      });
      setStatus((prevStatus) => ({ ...prevStatus, submitting: false }));
    }
  };

  return (
    <>
      <div className="h-screen sm:flex sm:flex-col mt-14 ">
        <div className=" lg:flex justify-center items-center my-14 ">
          <div className="bg-orange-400 h-36 lg:h-[36rem] lg:w-[45rem] content-center">
          <div className="mt-14">
              <h1><p  className="text-white  "> Antes de seguir, <br/> queremos conocerte</p></h1>
              <img src={logoblanco} alt="logo" className=" h-[3rem] w-[12rem] lg:ml-[16rem] mt-[8rem]" />
            </div>
          </div>
          <div className="flex justify-center items-center bg-white lg:h-[36rem] lg:w-[33rem]  ">
            <form onSubmit={handleOnSubmit} className="bg-white w-80">
              <h1 className="text-blue font-bold text-2xl text-left py-4">Registro</h1>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.name ? "border-red-500" : ""}`}
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  value={inputs.name}
                  onChange={handleOnChange}
                />
              </div>
              {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.surname ? "border-red-500" : ""}`}
                  type="text"
                  id="surname"
                  placeholder="Apellido"
                  value={inputs.surname}
                  onChange={handleOnChange}
                />
              </div>
              {errors.surname && <div className="text-red-500 text-sm mt-2">{errors.surname}</div>}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.email ? "border-red-500" : ""}`}
                  type="text"
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
                  placeholder="Contraseña"
                  value={inputs.password}
                  onChange={handleOnChange}
                />
              </div>
              {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.bankInformation ? "border-red-500" : ""}`}
                  type="text"
                  id="bankInformation"
                  placeholder="bankInformation"
                  value={inputs.bankInformation}
                  onChange={handleOnChange}
                />
              </div>
              {errors.bankInformation && <div className="text-red-500 text-sm mt-2">{errors.bankInformation}</div>}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.entityName ? "border-red-500" : ""}`}
                  type="text"
                  id="entityName"
                  placeholder="Nombre de la institución"
                  value={inputs.entityName}
                  onChange={handleOnChange}
                />
              </div>
              {errors.entityName && <div className="text-red-500 text-sm mt-2">{errors.entityName}</div>}
              <div>
                <input
                  className={`pl-2 outline-none border-none w-full ${errors.isInstitution ? "border-red-500" : ""}`}
                  type="checkbox"
                  id="isInstitution"
                  placeholder="¿Es una institución?"
                  value={inputs.isInstitution}
                  onChange={handleOnChange}
                />
              </div>
              {errors.isInstitution && <div className="text-red-500 text-sm mt-2">{errors.isInstitution}</div>}
              <div className="flex justify-center items-center my-4 bg-white">
                <button className=" bg-orange-400 text-white font-bold py-2 px-4 rounded-2xl" type="submit" disabled={status.submitting}>
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

export default RegistroSolicitante;
