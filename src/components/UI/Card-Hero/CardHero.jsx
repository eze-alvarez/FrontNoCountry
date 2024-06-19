import TextHero from "../TextHero/textHero";
import boys from "../../../assets/Images/commonImg/Home.png";
import { Link } from "react-router-dom";
export default function CardHero() {
    return (
        <div className="mx-4 mb-9 pt-16 lg:pt-20 flex flex-col  md:mb-20 md:mx-6 md:flex-row  md:justify-around
        landscape:flex-row">
            <div className="pr-5 h-full flex flex-col  max-w-96 lg:max-w-[500px]  justify-between">
                <TextHero />
                <p className="my-4 md:my-6">
                    Cada donación transforma vidas. Unite y sé parte del cambio
                    positivo que queremos ver en el mundo
                </p>
                <Link to="/login">
                    <button className="landscape:my-0 md:my-6 mb-4 bg-btn-orange h-42 w-110 rounded-full self-end lg:landscape:my-6">
                        <p className="text-white text-xs font-bold">
                            Doná ahora
                        </p>
                    </button>
                </Link>
            </div>
            <div className=" mt-5 h-[371px]  md:mt-0 landscape:mt-0 landscape:h-[250px] lg:landscape:h-[371px]  flex justify-center">
                <img
                    className="h-full w-auto"
                    src={boys}
                    alt="boys"
                />
            </div>
        </div>
    );
}