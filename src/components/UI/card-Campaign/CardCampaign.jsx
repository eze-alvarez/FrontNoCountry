

import TestImg from "../../../assets/Images/CardImg/Firefigthers.png";
import Heart from "../../../assets/Images/LogoImg/logo.png";
import { info } from "autoprefixer";

// eslint-disable-next-line react/prop-types
const CardCampaign = ({ data }) => {
    const infoCard = data;
    const progress = (infoCard.acumulate * 100) / infoCard.goal;
    return (
        <div className=" max-w-370 h-522 bg-main-white rounded-2xl m-auto flex flex-col">
            <div className="w-full h-201">
                <img
                    src={infoCard.img}
                    alt="Card Campaign"
                    className="object-fill w-full h-full"
                />
            </div>
            <div className="flex flex-col h-full justify-between px-5 pb-6 pt-9">
                <h1 className=" mb-2">{infoCard.title}</h1>

                <p
                    className=" text-blue-text mb-2"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                {infoCard.description}
                </p>

                {/* Barra */}
                <div
                    className="ProgressDonation"
                    className="grow flex items-center justify-between relative w-11/12 text-center"
                >
                    <div
                        className="ProgressIcon"
                        style={{ left: `${progress}%` }}
                        className=" absolute w-1 h-1 flex items-center justify-center"
                    >
                        <div
                            style={
                                progress < 60
                                    ? { backgroundColor: "#FFB905" }
                                    : { backgroundColor: "#2EBF7E" }
                            }
                            className="w-11 h-11 absolute rounded-full flex items-center justify-center"
                        >
                            <img
                                className="object-contain"
                                src={Heart}
                                alt="Heart"
                            />
                        </div>
                    </div>

                    <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden border-solid border-2">
                        <div
                            className="flex flex-col justify-center overflow-hidden bg-orange-bar whitespace-nowrap "
                            style={{ width: `${progress}%`, maxWidth: "60%" }}
                            role="progressbar"
                        ></div>
                        {progress > 60 ? (
                            <div
                                className="flex flex-col justify-center overflow-hidde bg-green-bar whitespace-nowrap "
                                style={{ width: `${progress - 60}%` }}
                                role="progressbar"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        ) : null}
                    </div>
                </div>

                <div
                    className="ValueDonation"
                    className="w-full flex items-center justify-between py-3"
                >
                    <p className="text-2xl text-blue-title font-bold">
                        ${infoCard.acumulate}
                    </p>
                    <p className=" text-blue-text">Objetivo: ${infoCard.goal}</p>
                </div>
                <button className="  bg-btn-orange h-42 w-110 rounded-full self-end ">
                    <p className="text-white text-xs font-bold">Leer mas</p>
                </button>
            </div>
        </div>
    );
};

export default CardCampaign;
