// import { useEffect } from 'react';
import logoblue from "../../assets/Images/headerImg/logo azul.png";
import sun from "../../assets/Images/commonImg/Pop up .png";

export default function PopUp({ title, message, message2, closePopUp }) {
  // useEffect(() => {
  //   // Establecer el temporizador para cerrar el popup después de 5 segundos
  //   const timer = setTimeout(() => {
  //     closePopUp();
  //   }, 5000);

  //   // Limpiar el temporizador si el componente se desmonta antes de los 5 segundos
  //   return () => clearTimeout(timer);
  // }, [closePopUp]);

  return (
    <div className="h-screen w-full bg-nav backdrop-blur-18 z-50">
      <section className="h-[calc(100vh-177px)] pt-64">
        <section className=" flex flex-col h-[calc(100vh-567px)] items-center">
          <article className='text-center h-[calc(100vh-602px)]  grid place-content-center gap-1'>
            <p className='text-xl font-bold text-blue-title'>{title}</p>
            <p className="my-2 w-[150px] mx-auto text-xl font-bold text-blue-title">{message}</p>
            <p className='text-xl font-bold text-blue-title'>{message2}</p>
          </article>
          <div className="flex-grow"></div>
          <section className="w-[150px] h-[35px]">
            <img src={logoblue} alt="logo donando" />
          </section>
        </section>
      </section>

      <section className="absolute bottom-0 left-0 w-full h-[177px]">
        <img src={sun} alt="imagen de sol" />
      </section>
    </div>
  );
}



//----------------- !!! asi llamar desde otro componente

// import { useState } from 'react';
// import PopUp from './PopUp';

// export default function ParentComponent() {
//   const [showPopUp, setShowPopUp] = useState(false);

//   const openPopUp = () => {
//     setShowPopUp(true);
//   };

//   const closePopUp = () => {
//     setShowPopUp(false);
//   };

//   return (
//     <div>
//       <button onClick={openPopUp}>Show PopUp</button>
//       {showPopUp && (
//         <PopUp
//           title="Tu donación se realizó con éxito"
//           message="¡Gracias!"
//           closePopUp={closePopUp}
//         />
//       )}
//     </div>
//   );
// }
