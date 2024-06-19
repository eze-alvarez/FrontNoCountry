
import home from "../../assets/Images/commonImg/Home.png"
const Contacto = () => {
  return (
    <>
      <div className="h-auto flex py-14 px-6 sm:px-8 md:px-20 lg:px-9  items-center justify-center md:items-start md:landscape:h-auto md:h-[calc(100vh-159px)] lg:landscape:min-h-[calc(100vh-159px)] lg:landscape:h-auto">
        <div className="pt-6 flex flex-col  gap-10 md:landscape:flex-row items-center  lg:pt-6">
          <div className="w-full md:landscape:w-1/2 ">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center md:landscape:text-left text-blue-title leading-tight font-bold tracking-wider">Contactanos</h2>

            <p className="mt-6 text-base lg:text-lg text-center md:landscape:text-left text-blue-text  ">
              ¡Bienvenido a nuestra sección de contacto!<br />
              Gracias por visitarnos. Si necesitas información adicional o si tienes alguna consulta específica, por favor no dudes en ponerte en contacto con nosotros.<br /><br /> Estamos aquí para ayudarte de la mejor manera posible.<br /><br />Puedes contactarnos a través de nuestras redes sociales,por correo electrónico o llamarnos directamente. 
            </p>

          </div>
          <div className="w-full md:w-1/2 landscape:w-1/2 flex justify-center md:justify-end lg:landscape:w-1/3 lg:mx-auto">
            <img src={home} />
          </div>
        </div>
      </div>

    </>
  );
};
export default Contacto