import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password || password.length < 6 || email.length < 6) {
      alert('Datos incorrectos')
    } else {
      alert('Bienvenido')
      setEmail('')
      setPassword('')
      navigate('')
    }
  }

  useEffect(() => {
    
    // Aquí puedes agregar alguna lógica adicional, como verificar si el usuario ya está autenticado
  }, [])

  return (
    <>
        <div className="h-screen md:flex mt-16">
          <div className="bg-orange-400 h-36">
            <h1 className="text-white">Hola</h1>
          </div>
          <div className="flex justify-center  items-center bg-white">
            <form onSubmit={handleSubmit} className="bg-white w-80">
              <h1 className="text-blue font-bold text-2xl text-left py-4">Bienvenido</h1>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className="pl-2 outline-none border-none"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex">
                <Link to="#">
                  <p className="pl-6 py-4 text-blue text-sm">¿Olvidaste mi Password?</p>
                </Link>
                <Link to="/registro">
                  <p className="py-4 text-blue text-sm">¿no tenes cuenta? Crea una</p>
                </Link>
              </div>
              <div className="mt-4 pl-20">
                <button type="submit" className="block w-40 bg-orange-400 h-42 rounded-full text-white rou font-semibold text-sm">
                  Iniciar sesión
                </button>
              </div>
              <div className="pl-20 mt-4">
                <Link to="/RegistroSolicitante">
                  <p className="py-4 font-semibold text-blue-700">Solicitar Donación</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      
    </>
  )
}
