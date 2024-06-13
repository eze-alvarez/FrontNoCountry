import { useState } from "react";
import Logo from "../../assets/Images/Forms/logo blanco.png";
import axios from "axios";

const CreateCampaign = () => {

     const [preview, setPreview] = useState(null);
     const [status, setStatus] = useState({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
     });
     const [inputs, setInputs] = useState({
          image: "",
          title: "",
          goal: "",
          description: "",
     });

     const [errors, setErrors] = useState({
          image: null,
          title: null,
          goal: null,
          description: null,
     });

     const validateImage = (image) => {
          // Agrega la validación de image aquí
          if (!image.trim()) {
               setErrors((prev) => ({
                    ...prev,
                    image: "Imagen requerida",
               }));
               return false;
          } else {
               setErrors((prev) => ({
                    ...prev,
                    image: null,
               }));
               return true;
          }
     };

     const validateTitle = (title) => {
          // Agrega la validación de title aquí
          return title.trim().length > 0;
     };

     const validateGoal = (goal) => {
          // Agrega la validación de goal aquí
          return goal.trim().length > 0;
     };

     const validateDescription = (description) => {
          // Agrega la validación de description aquí
          return (
               description.trim().length > 10 &&
               description.trim().length < 1000
          );
     };

     const handleServerResponse = (ok, msg) => {
          if (ok) {
               setStatus({
                    submitted: true,
                    submitting: false,
                    info: { error: false, msg: msg },
               });
               setPreview(null);
               setInputs({
                    image: "",
                    title: "",
                    goal: "",
                    description: "",
               });
               setErrors({
                    image: "null",
                    title: "null",
                    goal: "null",
                    description: "null",
               });
               window.location.href = "/";
          } else {
               setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: true, msg: msg },
               });
          }
     };


     const handleImageChange = (e) => {
          const file = e.target.files[0];

          if (file) {
               const imgUrl = URL.createObjectURL(file);
               setPreview(imgUrl);
               setInputs((prev) => ({
                    ...prev,
                    image: imgUrl,
               }));
          }
     };

     const handleInputChange = (e) => {
          const { id, value } = e.target;
          setInputs((prev) => ({
               ...prev,
               [id]: value,
          }));
          setStatus({
               submitted: false,
               submitting: false,
               info: { error: false, msg: null },
          });

          switch (id) {
               case "title":
                    setErrors((prev) => ({
                         ...prev,
                         title: !validateTitle(value)
                              ? "Titulo requerido"
                              : null,
                    }));
                    break;
               case "goal":
                    setErrors((prev) => ({
                         ...prev,
                         goal: !validateGoal(value)
                              ? "Objetivo requerido"
                              : null,
                    }));
                    break;
               case "description":
                    setErrors((prev) => ({
                         ...prev,
                         description: !validateDescription(value)
                              ? "Descripción de 10 a 1000 caraccteres"
                              : null,
                    }));
                    break;
               default:
                    break;
          }
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

          const isImageValid = validateImage(inputs.image);
          const isTitleValid = validateTitle(inputs.title);
          const isGoalValid = validateGoal(inputs.goal);
          const isDescriptionValid = validateDescription(inputs.description);

          if (
               isImageValid &&
               isTitleValid &&
               isGoalValid &&
               isDescriptionValid
          ) {
               /* axios({
                    method: "POST",
                    url: "http://localhost:8000/api/campaigns/",
                    data: inputs,
               })
                    .then((response) => {
                         handleServerResponse(
                              true,
                              "Campaña creada exitosamente"
                         );
                         console.log(response);
                    })
                    .catch((error) => {
                         handleServerResponse(
                              false,
                              error.response.data.error
                         );
                         console.log(error);
                    }); */

               handleServerResponse(true, "Campaña creada exitosamente");
               console.log(inputs);
          } else {
               setErrors({
                    image: isImageValid ? null : "Imagen requerida",
                    title: isTitleValid ? null : "Titulo requerido",
                    goal: isGoalValid ? null : "Objetivo requerido",
                    description: isDescriptionValid
                         ? null
                         : "Descripción de 10 a 1000 caraccteres",
               });
               setStatus((prevStatus) => ({
                    ...prevStatus,
                    submitting: false,
               }));
          }
     };

     return (
          <div className="pt-15 mt-12 flex flex-col m-auto md:flex-row">
               <div className="bg-forms md:h-screen h-60 flex flex-col justify-center items-start md:items-center  md:w-full">
                    <p className="text-white  text-2xl font-medium mt-12 md:mt-0 w-32 md:ml-0 ml-6">
                         Contanos tu historia
                    </p>
                    <div className="hidden md:block w-64 mt-32">
                         <img
                              src={Logo}
                              alt="Logo"
                              className="object-cover w-full h-full"
                         />
                    </div>
               </div>
               <div className="flex flex-col pt-9 md:mt-0 md:pt-14 w-full md:w-2/3 justify-start items-center md:h-screen m-auto bg-white">
                    <h1 className="my-2 pl-5 w-full text-start">
                         Crea tu campaña
                    </h1>
                    <div
                         className={`p-[2px] h-60 w-370 rounded-lg border-[1px] ${
                              errors.image
                                   ? "border-red-500"
                                   : "border-blue-text"
                         } bg-white  my-4 relative flex justify-center items-center`}
                    >
                         <p className="absolute">Agregar foto</p>
                         {preview && (
                              <img
                                   src={preview}
                                   alt="Vista previa de la imagen"
                                   className="rounded-lg object-cover w-full h-full z-10"
                              />
                         )}
                    </div>
                    {errors.image && (
                         <p className="text-red-500 text-sm">{errors.image}</p>
                    )}

                    <form className="flex flex-col items-center justify-start">
                         <input
                              type="file"
                              id="image"
                              accept="image/*"
                              onChange={handleImageChange}
                              className=" text-transparent  my-1 mx-6 md:my-22 flex text-sm file:bg-orange-title file:text-main-white file:border-none file:w-110 file:h-42 file:rounded-full hover:file:bg-orange-bar"
                         />

                         <input
                              type="text"
                              className={`mt-4 h-12 w-80 rounded-lg border-[1px] ${
                                   errors.title
                                        ? "border-red-500"
                                        : "border-blue-text"
                              }   px-2`}
                              id="title"
                              placeholder="Titulo"
                              onChange={handleInputChange}
                              value={inputs.title}
                         />
                         {errors.title && (
                              <p className="text-red-500 text-xs">
                                   {errors.title}
                              </p>
                         )}
                         <input
                              type="number"
                              id="goal"
                              value={inputs.goal}
                              className={`mt-4 h-12 w-80 rounded-lg border-[1px] ${
                                   errors.goal
                                        ? "border-red-500"
                                        : "border-blue-text"
                              }  px-2`}
                              onChange={handleInputChange}
                              placeholder="Monto"
                         />
                         {errors.goal && (
                              <p className="text-red-500 text-xs">
                                   {errors.goal}
                              </p>
                         )}
                         <textarea
                              value={inputs.description}
                              id="description"
                              className={`mt-4 h-52 w-80 rounded-lg border-[1px] ${
                                   errors.description
                                        ? "border-red-500"
                                        : "border-blue-text"
                              } p-3`}
                              onChange={handleInputChange}
                              placeholder="Descripcion"
                         />
                         {errors.description && (
                              <p className="text-red-500 text-xs">
                                   {errors.description}
                              </p>
                         )}
                         <button
                              onClick={handleSubmit}
                              className="bg-btn-orange h-42 w-110 rounded-full my-6 self-center"
                         >
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
