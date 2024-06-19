/* import React from "react";
import { CardsInfo } from "../../constants/cardsInfo";
import Carousel from "../UI/Carousel/carousel";

import CardCampaign from "../UI/Card-Campaign/cardCampaign";
import { Link } from "react-router-dom";

const SectionCampaigns = () => {
    return (
        <div className="flex flex-col pt-12 md:mt-20 ">
            <h1 className=" md:mb-4">Campañas</h1>
            <div className="w-full">
                <Carousel>
                    {CardsInfo.map((card, index) => (
                        <CardCampaign key={index} data={card} />
                    ))}
                </Carousel>

            </div>
            <Link to="/allCampaigns">
                <u className=" text-blue-title" >
                    <p className="text-2xl text-center text-blue-title font-bold pt-16 mb-11 md:pt-20 md:mb-20">
                        Ver Todas las Campañas
                    </p>
                </u>
            </Link>
        </div>
    );
};

export default SectionCampaigns; */

/* ~~~~~~~~~~~~~~~~~ Nuevos Cambios NO BORRAR ~~~~~~~~~~~~~~~~~ */

import React, { useEffect } from "react";
import Carousel from "../UI/Carousel/carousel";

import CardCampaign from "../UI/Card-Campaign/cardCampaign";
import { Link } from "react-router-dom";

import { getCampaign } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SectionCampaigns = () => {
     const allCampaigns = useSelector((state) => state.campaignInfo.campaigns);
     const dispatch = useDispatch();

    useEffect(() => {
          dispatch(getCampaign());
     }, [dispatch]);

     return (
          <div className="flex flex-col mb-11 mt-9">
               <h1 className="mb-4">Campañas</h1>
               {allCampaigns.length > 0? (
                    <Carousel>
                         {allCampaigns.map((card, index) => (
                              <CardCampaign key={index} data={card} />
                         ))}
                    </Carousel>
               ): <div>Cargando...</div>}

               <Link to="/allCampaigns">
                    <p className="text-2xl text-center text-blue-title font-bold mt-9 mb-11">
                        <u>Ver Todas las Campañas</u>
                    </p>
               </Link>
          </div>
     );
};

export default SectionCampaigns;
