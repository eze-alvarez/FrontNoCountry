

export const Registro = () => {
  return (
    <>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-blue font-bold text-2xl text-left mb-4">Ingresá tua datos</h1>
          <div className="">
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="Nombre " />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">

              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="Apellido" />
            </div>
          </div>
          <div className="flex items-center border-2 py-2 px-3 mt-3 rounded-2xl mb-4">

            <input
              className="pl-2 outline-none border-none"
              type="text"
              placeholder="Localidad" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">

            <input
              className="pl-2 outline-none border-none"
              type="namber"
              placeholder="Telefono" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 mt-3 rounded-2xl mb-4">

            <input
              className="pl-2 outline-none border-none"
              type="email"
              placeholder="Email " />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">

            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Password" />
          </div>


        </form>
      </div>

    </>
  )
}
