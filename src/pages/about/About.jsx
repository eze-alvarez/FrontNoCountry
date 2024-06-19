
import AnimalShelter from "../../assets/Images/CardsImg/AnimalShelter.png"
import CommunityDR from "../../assets/Images/CardsImg/CommunityDR.png"
import Firefigthers from "../../assets/Images/CardsImg/Firefigthers.png"


const About = () => {
  return (
    <>
      <div className="h-auto flex flex-col py-14 px-6 gap-2 sm:px-8 md:px-20 lg:px-9  items-center justify-center md:justify-normal  md:landscape:h-auto md:h-[calc(100vh-159px)] lg:landscape:h-[calc(100vh-159px)]">
        <h1 className=" mt-6 text-center text-3xl sm:text-4xl lg:text-5xl text tracking-wider sm:mb-4">
          Sobre Nosotros
        </h1>
        <h3 className="my-4    text-blue-text text-base lg:text-lg  text-center ">
          <p className=" text-start   ">
            Somos una organización sin fines de lucro dedicada a facilitar y
            fomentar la donación de manera sencilla y segura.  <br /> <br />Nuestro objetivo
            es conectar a las personas y organizaciones que necesitan apoyo con
            aquellos que desean hacer una diferencia a través de sus
            contribuciones y para lograrlo, dependemos del generoso apoyo de
            donantes como ustedes.
            {/*  */}
          </p>
        </h3>

        {/* <div className="flex  gap-2 mt-12 ">
            <div className="  h-[13rem] w-[20rem] invisible lg:visible ">
              <img src={AnimalShelter} alt="logo" />
            </div>

            <div className="  h-[13rem] w-[20rem]   ">
              <img src={CommunityDR} alt="logo" />
            </div>

            <div className="  h-[13rem] w-[20rem] invisible lg:visible ">
              <img src={Firefigthers} alt="logo" />
            </div>
        </div> */}

        <div className="flex gap-2">
            <div className="  ">
              <img src={AnimalShelter} alt="logo" />
            </div>

            <div className="    ">
              <img src={CommunityDR} alt="logo" />
            </div>

            <div className="  max-lg:hidden">
              <img src={Firefigthers} alt="logo" />
            </div>
        </div>

        <p className="text-lg m-6 italic text-center">
          Cada donación transforma vidas. Unite y sé parte del cambio positivo
          que queremos ver en el mundo
        </p>
      </div>
    </>
  );
}

export default About
