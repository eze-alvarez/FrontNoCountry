import TextHero from "../TextHero/textHero";
import boys from "../../../assets/Images/commonImg/Home.png";
import { Link } from "react-router-dom";
export default function CardHero() {
    return (
        <div className="mx-4 mb-9 pt-16 flex flex-col md:mt-16 md:mb-20 md:mx-0 md:flex-row  md:w-full md:justify-around">
            <div className="pr-14 h-full flex flex-col  max-w-96  justify-between">
                <TextHero />
                <p className="my-4 md:my-6">
                    Cada donación transforma vidas. Unite y sé parte del cambio
                    positivo que queremos ver en el mundo
                </p>
                <Link to="/login">
                    <button className=" md:my-6 mb-4 bg-btn-orange h-42 w-110 rounded-full self-end ">
                        <p className="text-white text-xs font-bold">
                            Doná ahora
                        </p>
                    </button>
                </Link>
            </div>
            <div className=" mt-5 h-96  md:mt-0 ">
                <img
                    className="object-contain w-full h-full"
                    src={boys}
                    alt="boys"
                />
            </div>
        </div>
    );
}