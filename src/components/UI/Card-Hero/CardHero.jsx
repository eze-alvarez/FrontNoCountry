import TextHero from "../TextHero/textHero"
import boys from "../../../assets/Images/commonImg/Home.png"
import { Link } from "react-router-dom";
export default function CardHero() {
  return (
    <div className="h-[calc(100vh-56px)]">
        <TextHero/>
        <Link to="/login">
            <button className="  bg-btn-orange h-42 w-110 rounded-full self-end my-1 mb-3 ml-4">
              <p className="text-white text-xs font-bold">Doná ahora</p>
            </button>
        </Link>
        <div className="h-[378px] w-full ">
          <img src={boys} alt="boys"/>
        </div>
    </div>
  )
}
