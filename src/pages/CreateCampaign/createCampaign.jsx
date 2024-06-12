import React, { useState } from "react";
import Logo from "../../assets/Images/Forms/logo blanco.png";

const CreateCampaign = () => {
     const [image, setImage] = useState(null);

     const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
               const reader = new FileReader();
               reader.onload = () => {
                    setImage(reader.result);
               };
               reader.readAsDataURL(file);
          }

     };

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Submit");
     };

     return (
          <div className="pt-15 mt-12 flex flex-col m-auto md:flex-row">
               <div className="bg-forms md:h-screen h-60 flex flex-col justify-center items-start md:items-center  md:w-full">
                    <p className="text-white  text-2xl font-medium mt-12 md:mt-0 w-32 md:ml-0 ml-6">Contanos tu historia</p>
                    <div className="hidden md:block w-64 mt-32">
                         <img src={Logo} alt="Logo" className="object-cover w-full h-full" />
                    </div>
               </div>
               <div className="flex flex-col pt-9 md:mt-0 md:pt-14 w-full md:w-2/3 justify-start items-center md:h-screen m-auto bg-white">
                    <h1 className="my-2 pl-5 w-full text-start">Crea tu campaña</h1>
                    <div className="h-60 w-370 rounded-lg border-[1px] border-blue-text bg-white  my-4 relative flex justify-center items-center">
                         <p className="absolute">Agregar foto</p>
                         {image && (
                              <img
                                   src={image}
                                   alt="Vista previa de la imagen"
                                   className="object-cover w-full h-full z-10"
                              />
                         )}
                    </div>
                    <form className="flex flex-col items-center justify-start">
                         <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="my-1 mx-6 md:my-22 flex text-sm file:bg-orange-title file:text-main-white file:border-none file:w-110 file:h-42 file:rounded-full hover:file:bg-orange-bar"
                         />
                         <input
                              type="text"
                              className="mt-4 h-12 w-80 rounded-lg border-[1px] border-blue-text  px-2"
                              placeholder="Titulo"
                         />
                         <input
                              type="number"
                              className="mt-4 h-12 w-80 rounded-lg border-[1px] border-blue-text  px-2"
                              placeholder="Monto"
                         />
                         <textarea className="mt-4 h-52 w-80 rounded-lg border-[1px] border-blue-text p-3" placeholder="Descripcion" />
                         <button onClick={handleSubmit} className="bg-btn-orange h-42 w-110 rounded-full my-6 self-center">
                              <p className="text-white text-xs font-bold">
                                   Publicar
                              </p>
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default CreateCampaign;
