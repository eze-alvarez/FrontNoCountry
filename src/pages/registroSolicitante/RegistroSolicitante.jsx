import { useState } from "react";
import axios from "axios";

const RegistroSolicitante = () => {


  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    location: "",
    phone: "",
    email: "",
    cbu: "",
    password: "",
    institutionName: "",
    isInstitution: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    lastName: null,
    location: null,
    phone: null,
    email: null,
    cbu: null,
    password: null,
    institutionName: null,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim().length >= 8;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateCBU = (cbu) => {
    // Agrega la validación de CBU aquí
    return cbu.trim().length === 22;
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
        lastName: "",
        location: "",
        phone: "",
        email: "",
        cbu: "",
        password: "",
        institutionName: "",
        isInstitution: false,
      });
      setErrors({
        name: null,
        lastName: null,
        location: null,
        phone: null,
        email: null,
        cbu: null,
        password: null,
        institutionName: null,
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
      case "phone":
        setErrors((prev) => ({
          ...prev,
          phone: !validatePhone(value) ? "Ingresa un número de teléfono válido" : null,
        }));
        break;
      case "cbu":
        setErrors((prev) => ({
          ...prev,
          cbu: !validateCBU(value) ? "Ingresa un CBU válido" : null,
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
    const isCBUValid = validateCBU(inputs.cbu);

    if (
      inputs.name.trim().length > 0 &&
      inputs.lastName.trim().length > 0 &&
      inputs.location.trim().length > 0 &&
      isEmailValid &&
      isPasswordValid &&
      isPhoneValid &&
      isCBUValid &&
      (inputs.isInstitution ? inputs.institutionName.trim().length > 0 : true)
    ) {
      axios({
        method: "POST",
        url: "/api/register",
        data: inputs,
      })
        .then((response) => {
          handleServerResponse(true, "Usuario registrado exitosamente");
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    } else {
      setErrors({
        name: inputs.name.trim().length === 0 ? "El nombre no puede estar vacío" : null,
        lastName: inputs.lastName.trim().length === 0 ? "El apellido no puede estar vacío" : null,
        location: inputs.location.trim().length === 0 ? "La localidad no puede estar vacía" : null,
        email: !isEmailValid ? "Ingresa un email válido" : null,
        phone: !isPhoneValid ? "Ingresa un número de teléfono válido" : null,
        cbu: !isCBUValid ? "Ingresa un CBU válido" : null,
        password: !isPasswordValid ? "La contraseña debe tener al menos 8 caracteres" : null,
        institutionName:
          inputs.isInstitution && inputs.institutionName.trim().length === 0
            ? "El nombre de la institución no puede estar vacío"
            : null,
      });
      setStatus((prevStatus) => ({ ...prevStatus, submitting: false }));
    }
  };

  return (
    <>
      <div className="h-screen md:flex mt-12">
        <div className="bg-orange-400 h-36">
          <h1 className="text-white">Hola</h1>
        </div>
        <div className="flex justify-center items-center bg-white">
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
                className={`pl-2 outline-none border-none w-full ${errors.lastName ? "border-red-500" : ""}`}
                type="text"
                id="lastName"
                placeholder="Apellido"
                value={inputs.lastName}
                onChange={handleOnChange}
              />
            </div>
            {errors.lastName && <div className="text-red-500 text-sm mt-2">{errors.lastName}</div>}
            <div className="flex items-center border-2 py-2 px-3 rounde-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full ${errors.location? "border-red-500" : ""}`}
                type="text"
                id="location"
                placeholder="Localidad"
                value={inputs.location}
                onChange={handleOnChange}
                />
                </div>
                {errors.location && <div className="text-red-500 text-sm mt-2">{errors.location}</div>}
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <input
                    className={`pl-2 outline-none border-none w-full ${errors.phone? "border-red-500" : ""}`}
                    type="text"
                    id="phone"
                    placeholder="Teléfono"
                    value={inputs.phone}
                    onChange={handleOnChange}
                  />
                </div>
                {errors.phone && <div className="text-red-500 text-sm mt-2">{errors.phone}</div>}
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <input
                    className={`pl-2 outline-none border-none w-full ${errors.email? "border-red-500" : ""}`}
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
                    className={`pl-2 outline-none border-none w-full ${errors.password? "border-red-500" : ""}`}
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
                    className={`pl-2 outline-none border-none w-full ${errors.cbu? "border-red-500" : ""}`}
                    type="text"
                    id="cbu"
                    placeholder="CBU"
                    value={inputs.cbu}
                    onChange={handleOnChange}
                  />
                </div>
                {errors.cbu && <div className="text-red-500 text-sm mt-2">{errors.cbu}</div>}
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <input
                    className={`pl-2 outline-none border-none w-full ${errors.institutionName? "border-red-500" : ""}`}
                    type="text"
                    id="institutionName"
                    placeholder="Nombre de la institución"
                    value={inputs.institutionName}
                    onChange={handleOnChange}
                  />
                </div>
                {errors.institutionName && <div className="text-red-500 text-sm mt-2">{errors.institutionName}</div>}
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <input
                    className={`pl-2 outline-none border-none w-full ${errors.isInstitution? "border-red-500" : ""}`}
                    type="checkbox"
                    id="isInstitution"
                    placeholder="¿Es una institución?"
                    value={inputs.isInstitution}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <input
                    className={`pl-2 outline-none border-none w-full ${errors.isInstitution? "border-red-500" : ""}`}
                    type="text"
                    id="isInstitution"
                    placeholder="¿Es una institución?"
                    value={inputs.isInstitution}
                    onChange={handleOnChange}
                  />
                </div>
                {errors.isInstitution && <div className="text-red-500 text-sm mt-2">{errors.isInstitution}</div>}
                </form>
                </div>
                </div>
                <div className="flex justify-center items-center mt-6 bg-white">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" type="submit" disabled={status.submitting}>
                    {status.submitting? "Registrando..." : "Registrarme"}
                  </button>
                </div>
                </>
  )
}

export default  RegistroSolicitante;
