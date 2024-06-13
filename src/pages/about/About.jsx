
import AnimalShelter from "../../assets/Images/CardsImg/AnimalShelter.png"
import CommunityDR from "../../assets/Images/CardsImg/CommunityDR.png"
import Firefigthers from "../../assets/Images/CardsImg/Firefigthers.png"


const About = () => {
  return (
    <>
      <div className="mx-4  mt-[3rem] pt-16 flex flex-col justify-start items-center mb-20 px-5 md:w-full ">


        <h1 className="text-center lg:text-5xl text-3xl text tracking-wider sm:mb-4">Sobre Nosotros</h1>
        <h3 className="my-4    text-blue-text text-lg  text-center ">
          <p className="lg:ml-12 text-start   sm:ml-[2rem] ">
             Somos una organización sin fines de lucro dedicada a facilitar y fomentar la donación de manera sencilla y segura. Nuestro objetivo es conectar a las personas y organizaciones que necesitan apoyo con aquellos que desean hacer una diferencia a través de sus contribuciones y para lograrlo, dependemos del generoso apoyo de donantes como ustedes.
            {/*  */}
          </p>
        </h3>
       
        <div className="flex  gap-2 mt-12 ">
          <div className="  h-[13rem] w-[20rem] invisible lg:visible ">
            <img src={AnimalShelter} alt="logo" />
          </div>
          <div className="  h-[13rem] w-[20rem]   ">
            <img src={CommunityDR} alt="logo" />
          </div>
          <div className="  h-[13rem] w-[20rem] invisible lg:visible ">
            <img src={Firefigthers} alt="logo" />
          </div>
        </div>
        <p className="text-lg m-6">Cada donación transforma vidas. Unite y sé parte del cambio
        positivo que queremos ver en el mundo </p>
      </div>



    </>
  )
}

export default About
