
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerEntiti } from "../../redux/actions/actions";


const RegistroSolicitante = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    bankInformation: "",
    password: "",
    entityName: "",
    isInstitution: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard/create");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerEntiti(formData));
  };
  
  return (
    <>
      <div className="h-screen md:flex mt-12">
        <div className="flex justify-center items-center bg-white">
          <form onSubmit={handleSubmit} className="bg-white w-80">
            <h1 className="text-blue font-bold text-2xl text-left py-4">
              Registro
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="text"
                name="surname"
                placeholder="Apellido"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="text"
                name="email"
                placeholder="Emails"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="text"
                name="bankInformation"
                placeholder="bankInformation"
                value={formData.bankInformation}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="text"
                name="entityName"
                placeholder="Nombre de la institución"
                value={formData.entityName}
                onChange={handleChange}
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
                className=" bg-orange-400 text-white font-bold py-2 px-4 rounded-2xl"
                type="submit"
              >
                {/* {status.submitting ? "Registrando..." : "Registrarme"} */}
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default RegistroSolicitante;
