
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/actions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

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
    dispatch(registerUser(formData));
  };

  return (
    <>
      <div className="h-screen md:flex mt-16">
        <div className="bg-orange-400 h-36">
          <h1 className="text-white">Hola</h1>
        </div>
        <div className="flex justify-center items-center bg-white">
          <form onSubmit={handleSubmit} className="bg-white w-80">
            <h1 className="text-blue font-bold text-2xl text-left py-4">
              Registro
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={"pl-2 outline-none border-none w-full"}
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
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Link to="/login" className="text-blue-500 ml-2">
              ¿Ya tienes una cuenta?
            </Link>
            <div className="flex justify-center items-center mt-6 bg-white">
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


export default Register;
