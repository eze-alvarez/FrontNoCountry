import React from "react";
import { CardsInfo } from "../../constants/cardsInfo";
import Carousel from "../UI/Carousel/carousel";

import CardCampaign from "../UI/Card-Campaign/cardCampaign";
import { Link } from "react-router-dom";

const SectionCampaigns = () => {
    return (
        <div className="flex flex-col mb-11 mt-9">
            <h1 className="mb-4">Campañas</h1>
            <Carousel>
                {CardsInfo.map((card, index) => (
                    <CardCampaign key={index} data={card} />
                ))}
            </Carousel>
            <Link to="/allCampaigns">
                <p className="text-2xl text-center text-blue-title font-bold mt-9 mb-11">
                    Ver Todas las Campañas
                </p>
            </Link>
        </div>
    );
};

export default SectionCampaigns;
