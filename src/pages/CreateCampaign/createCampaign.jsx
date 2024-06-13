import { useState } from "react";
import Logo from "../../assets/Images/Forms/logo blanco.png";
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

    if (name === "image" && files && files.length > 0) {
      setInputs({
        ...inputs,
        image: files[0],
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
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
      alert("Campaña no creada: " + result.message);
    }
  };

  return (
    <>
      <div
        className={`pt-15 mt-12 ${
          showPopUp ? "hidden" : "flex"
        } flex-col m-auto md:flex-row`}
      >
        <div className="bg-forms md:h-screen h-60 flex flex-col justify-center items-start md:items-center md:w-full">
          <p className="text-white text-2xl font-medium mt-12 md:mt-0 w-32 md:ml-0 ml-6">
            Contanos tu historia
          </p>
          <div className="hidden md:block w-64 mt-32">
            <img src={Logo} alt="Logo" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col pt-9 md:mt-0 md:pt-14 w-full md:w-2/3 justify-start items-center md:h-screen m-auto bg-white">
          <h1 className="my-2 pl-5 w-full text-start">Crea tu campaña</h1>
          <div
            className={`p-[2px] h-60 w-370 rounded-lg border-[1px] border-blue-text bg-white my-4 relative flex justify-center items-center`}
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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-start"
          >
            <input
              type="text"
              className="mt-4 h-12 w-80 rounded-lg border-[1px] border-blue-text px-2"
              required
              placeholder="Titulo"
              onChange={handleInputChange}
              name="title"
            />
            <input
              name="description"
              className="mt-4 h-52 w-80 rounded-lg border-[1px] border-blue-text p-3"
              onChange={handleInputChange}
              placeholder="Descripcion"
            />
            <input
              type="text"
              name="monetary_goal"
              className="mt-4 h-12 w-80 rounded-lg border-[1px] border-blue-text px-2"
              onChange={handleInputChange}
              placeholder="Monto"
            />
            <input
              type="file"
              name="image"
              required
              onChange={handleInputChange}
              className="text-transparent my-1 mx-6 md:my-22 flex text-sm file:bg-orange-title file:text-main-white file:border-none file:w-110 file:h-42 file:rounded-full hover:file:bg-orange-bar"
            />
            <button
              type="submit"
              className="bg-btn-orange h-42 w-110 rounded-full my-6 self-center"
            >
              <p className="text-white text-xs font-bold">Publicar</p>
            </button>
          </form>
        </div>
      </div>
      {showPopUp && (
        <PopUp
          title="Tu publicación se ha subido con éxito"
          message="¡Mucha suerte!"
        />
      )}
    </>
  );
};

export default CreateCampaign;
