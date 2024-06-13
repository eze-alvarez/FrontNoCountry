import React, { useEffect } from "react";
import { CardsInfo } from "../../constants/cardsInfo";
import CardCampaign from "../../components/UI/Card-Campaign/cardCampaign";
import TextHero from "../../components/UI/TextHero/textHero";
import { useDispatch, useSelector } from "react-redux";
import { getCampaign } from "../../redux/actions/actions";

const AllCampaigns = () => {

    const allCampaigns = useSelector((state) => state.campaigns);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCampaign());
    }, [allCampaigns]);

    return (
        <div className="pt-16 my-4 md:my-14 ">
            <div className="text-start mx-10 mb-10 md:mb-16 md:ml-28">
                <TextHero />
                <p className="mt-5 ">Conocé todas nuestas campañas</p>
            </div>

            <div className="flex flex-wrap justify-around ">
                {CardsInfo.map((data, index) => {
                    return (
                        <div className="mb-16 " key={index}>
                            <CardCampaign key={index} data={data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllCampaigns;
