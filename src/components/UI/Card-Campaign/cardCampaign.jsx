import React from "react";
import TestImg from "../../../assets/Images/CardsImg/Firefigthers.png";
import Heart from "../../../assets/Images/commonImg/heart.png";
import { info } from "autoprefixer";
import { Link } from "react-router-dom";

const CardCampaign = ({ data }) => {
    const infoCard = data;
    const progress = (infoCard.acumulate * 100) / infoCard.monetary_goal;
    return (
        <div className=" w-[300px] sm:w-[346px] h-[475px] bg-main-white shadow-card-shadow my-10 rounded-2xl m-auto flex flex-col">
            <div className="w-auto h-[270px] rounded-t-2xl overflow-hidden ">
                <img
                    src={infoCard.image}
                    alt="Card Campaign"
                    className="object-fill max-w-full max-h-full w-full h-full h-auto block  rounded-t-2xl"
                />
            </div>
            <div className="flex flex-col h-full justify-between px-3 pb-6 pt-9">
                <h1 className=" mb-2 text-start">{infoCard.title}</h1>

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
                <div className="grow mx-auto flex items-center justify-between relative w-[90%] text-center">
                    <div
                        style={{ left: `${progress}%` }}
                        className=" absolute w-1 h-1 flex items-center justify-center"
                    >
                        <div
                            style={
                                progress < 60
                                    ? { backgroundColor: "#FFB905" }
                                    : { backgroundColor: "#2EBF7E" }
                            }
                            className="w-10 h-10 absolute rounded-full flex items-center justify-center"
                        >
                            <img
                                className="object-contain"
                                src={Heart}
                                alt="Heart"
                            />
                        </div>
                    </div>

                    <div className=" flex w-full h-4 bg-gray-200 rounded-full overflow-hidden border-solid border-2">
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

                <div className="w-full flex items-center justify-between py-3">
                    <p className="text-2xl text-blue-title font-bold">
                        ${infoCard.acumulate}
                    </p>
                    <p className=" text-blue-text">
                        Objetivo: ${infoCard.monetary_goal}
                    </p>
                </div>
                <Link className="self-end" to={`/campaign/${infoCard.id}`}>
                    <button className="  bg-btn-orange h-42 w-110 rounded-full  ">
                        <p className="text-white text-xs font-bold">Leer mas</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CardCampaign;
