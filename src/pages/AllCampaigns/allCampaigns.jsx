import React from "react";
import { CardsInfo } from "../../constants/cardsInfo";
import CardCampaign from "../../components/UI/Card-Campaign/cardCampaign";
import TextHero from "../../components/UI/TextHero/textHero";

const AllCampaigns = () => {
    return (
        <div className="pt-16">
            <div className="text-start mx-6 mb-6">
                <TextHero />
                <p className="mt-2">Conocé todas nuestas campañas</p>
            </div>

            <div className="flex flex-wrap justify-center ">
                {CardsInfo.map((data, index) => {
                    return (
                        <div className="m-5">
                            <CardCampaign key={index} data={data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllCampaigns;
