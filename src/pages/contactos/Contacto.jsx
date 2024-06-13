
import home from "../../assets/Images/commonImg/Home.png"
const Contacto = () => {
  return (
    <>
      <div className="flex pt-12 px-6 md:px-20   items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl mt-[6rem] lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">Si queres conoser mas Contactanos</h2>

            <p className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-blue-text font-light tracking-wider leading-relaxed">
              ¡Bienvenido a nuestra sección de contacto!<br /><br />
              Gracias por visitarnos. Si necesitas información adicional o si tienes alguna consulta específica, por favor no dudes en ponerte en contacto con nosotros.<br /><br /> Estamos aquí para ayudarte de la mejor manera posible.<br /> Puedes contactarnos a través de nuestras redes sociales,<br /> por correo electrónico o llamarnos directamente. .
            </p>

          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={home} />
          </div>
        </div>
      </div>

    </>
  );
};
export default Contacto