
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/actions";
import logoblanco from '../../assets/Images/commonImg/logoblanco.png';

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
      <div className="h-screen sm:flex sm:flex-col mt-14 ">
        <div className=" lg:flex justify-center items-center my-14 ">
          <div className="bg-forms h-36 lg:h-[36rem] lg:w-[45rem] content-center">
          <div className="mt-14">
              <h1><p  className="text-white  "> Antes de seguir, <br/> queremos conocerte</p></h1>
              <img src={logoblanco} alt="logo" className=" h-[3rem] w-[12rem] lg:ml-[16rem] mt-[8rem]" />
            </div>
          </div>

          <div className="flex justify-center items-center bg-white lg:h-[36rem] lg:w-[33rem]  ">
          <form onSubmit={handleSubmit} className="bg-white w-80">

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
    </>
  );
};



export default Register;

