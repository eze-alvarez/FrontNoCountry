import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }))
      .then((response) => {
        console.log(response);
        if (response.sucess === true) {
          alert("Login successful!");
        } else {
          alert("Login failed: " + response.message);
        }
      })
      .catch((error) => {
        alert("An error occurred: " + error.response.data.message);
      });
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
              Bienvenido
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <input
                className={`pl-2 outline-none border-none w-full`}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex">
              {/* <Link to="#">
                <p className="pl-6 py-4 text-blue text-sm">¿Olvidaste tu contraseña?</p>
              </Link> */}
              <Link to="/registro">
                <p className="py-4 text-blue text-sm">
                  ¿No tienes cuenta? Crea una
                </p>
              </Link>
            </div>
            <div className="mt-4 pl-20">
              <button
                type="submit"
                className="block w-40 bg-orange-400 h-42 rounded-full text-white rou font-semibold text-sm"
              >
                {/* {status.submitting ? "Enviando..." : "Iniciar sesión"} */}
                Iniciar Seccion
              </button>
            </div>
            <div className="pl-20 mt-4">
              <Link to="/RegistroSolicitante">
                <p className="py-4 font-semibold text-blue-700">
                  Solicitar Donación
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
