import { useState } from "react";
import Logo from "../../assets/Images/Forms/logo blanco.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createCampaign } from "../../redux/actions/actions";
import PopUp from "../../components/PopUp/PopUp";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
     const dispatch = useDispatch();
     const user = useSelector((state) => state.user);
     const [showPopUp, setShowPopUp] = useState(false);
     const navigate = useNavigate();

     const [preview, setPreview] = useState(null);
     const [inputs, setInputs] = useState({
          image: null,
          title: "",
          monetary_goal: "",
          description: "",
          entitiId: user ? user.id : "",
     });

     const handleInputChange = (e) => {
          const { name, value, files } = e.target;
          
          
          if(name === "image" && files && files.length > 0) {
               setInputs({
                   ...inputs,
                    image: files[0],
               });
               const reader = new FileReader();
               reader.onloadend = () => {
                    setPreview(reader.result);
                }
                reader.readAsDataURL(files[0]);
          } else {
               setInputs({
                   ...inputs,
                    [name]: value,
               });
          }
          
          /* setInputs({
               ...inputs,
               [e.target.name]: e.target.value,
          });
          if (e.target.name === "image") {
               const imgUrl = URL.createObjectURL(e.target.files[0]);
               setPreview(imgUrl);
               console.log(imgUrl)
          } */
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          const formData = new FormData();

          formData.append("image", inputs.image);
          formData.append("title", inputs.title);
          formData.append("monetary_goal", inputs.monetary_goal);
          formData.append("description", inputs.description);
          formData.append("entitiId", inputs.entitiId);

          const result = await dispatch(createCampaign(formData));
          
          

          if (result.success) {
               setInputs({
                    image: "",
                    title: "",
                    monetary_goal: "",
                    description: "",
                    entitiId: user ? user.id : "",
               });
               setShowPopUp(true);
               setTimeout(() => {
                    navigate("/");
               }, 3000);
          } else {
               alert("Campaña no creada" + result.message);
          }
     };

     /* const [preview, setPreview] = useState(null);
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
     }); */

     /* const validateImage = (image) => {
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
     }; */

     /* const validateTitle = (title) => {
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
     }; */

     /* const handleServerResponse = (ok, msg) => {
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
               axios({
                    method: "POST",
                    url: "https://back-no-country-c18-03-m-node.fly.dev/api/v1/campaign/",
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
                    });

               
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

      */

     return (
          <>
               <div
                    className={`pt-15 mt-12 ${
                         showPopUp ? "hidden" : "flex"
                    } flex-col m-auto md:flex-row`}
               >
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
                              className={`p-[2px] h-60 w-370 rounded-lg border-[1px] border-blue-text bg-white  my-4 relative flex justify-center items-center`}
                              /* className={`p-[2px] h-60 w-370 rounded-lg border-[1px] ${
                              errors.image
                                   ? "border-red-500"
                                   : "border-blue-text"
                                   } bg-white  my-4 relative flex justify-center items-center`} */
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
                         {/* {errors.image && (
                         <p className="text-red-500 text-sm">{errors.image}</p>
                         )} */}

                         <form
                              onSubmit={handleSubmit}
                              className="flex flex-col items-center justify-start"
                         >
                              <input
                                   type="file"
                                   name="image"
                                   accept="image/*"
                                   onChange={handleInputChange}
                                   className=" text-transparent  my-1 mx-6 md:my-22 flex text-sm file:bg-orange-title file:text-main-white file:border-none file:w-110 file:h-42 file:rounded-full hover:file:bg-orange-bar"
                              />

                              <input
                                   type="text"
                                   className={`mt-4 h-12 w-80 rounded-lg border-[1px] border-blue-text px-2`}
                                   /* className={`mt-4 h-12 w-80 rounded-lg border-[1px] ${
                                   errors.title
                                        ? "border-red-500"
                                        : "border-blue-text"
                              }   px-2`} */
                                   required
                                   placeholder="Titulo"
                                   onChange={handleInputChange}
                                   name="title"
                              />
                              {/* {errors.title && (
                              <p className="text-red-500 text-xs">
                                   {errors.title}
                                   </p>
                                   )} */}
                              <input
                                   type="number"
                                   name="monetary_goal"
                                   className={`mt-4 h-12 w-80 rounded-lg border-[1px] border-blue-text px-2`}
                                   /* className={`mt-4 h-12 w-80 rounded-lg border-[1px] ${
                                   errors.goal
                                   ? "border-red-500"
                                   : "border-blue-text"
                                   }  px-2`} */
                                   onChange={handleInputChange}
                                   placeholder="Monto"
                              />
                              {/* {errors.goal && (
                              <p className="text-red-500 text-xs">
                              {errors.goal}
                              </p>
                              )} */}
                              <textarea
                                   name="description"
                                   className={`mt-4 h-52 w-80 rounded-lg border-[1px] border-blue-text p-3`}
                                   /* className={`mt-4 h-52 w-80 rounded-lg border-[1px] ${
                                   errors.description
                                   ? "border-red-500"
                                   : "border-blue-text"
                                   } p-3`} */
                                   onChange={handleInputChange}
                                   placeholder="Descripcion"
                              />
                              {/* {errors.description && (
                              <p className="text-red-500 text-xs">
                              {errors.description}
                              </p>
                              )} */}
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
               {showPopUp && (
                    <PopUp
                         title={`Tu publicación se ha subido con éxito`}
                         message="¡Mucha suerte!"
                         
                    />
               )}
          </>
     );
};

export default CreateCampaign;
