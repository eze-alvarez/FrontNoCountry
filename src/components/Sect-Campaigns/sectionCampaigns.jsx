import React from "react";
import { CardsInfo } from "../../constants/cardsInfo";
import Carousel from "../UI/Carousel/carousel";

import CardCampaign from "../UI/Card-Campaign/cardCampaign";
import { Link } from "react-router-dom";

const SectionCampaigns = () => {
    return (
        <div className="flex flex-col mt-9 md:mt-20 ">
            <h1 className="mb-4 md:mb-14">Campañas</h1>
            <Carousel>
                {CardsInfo.map((card, index) => (
                    <CardCampaign key={index} data={card} />
                ))}
            </Carousel>
            <Link to="/allCampaigns">
                <u className=" text-blue-title" >
                    <p className="text-2xl text-center text-blue-title font-bold mt-12 mb-11 md:mt-20 md:mb-20">
                        Ver Todas las Campañas
                    </p>
                </u>
            </Link>
        </div>
    );
};

export default SectionCampaigns;

/* ~~~~~~~~~~~~~~~~~ Nuevos Cambios NO BORRAR ~~~~~~~~~~~~~~~~~ */

/* import React, { useEffect } from "react";
import { CardsInfo } from "../../constants/cardsInfo";
import Carousel from "../UI/Carousel/carousel";

import CardCampaign from "../UI/Card-Campaign/cardCampaign";
import { Link } from "react-router-dom";

import { fetchData } from "../../redux/reducers/campaignSlice";
import { useDispatch, useSelector } from "react-redux";


const SectionCampaigns = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col mb-11 mt-9">
            <h1 className="mb-4">Campañas</h1>
            {
                data != null && !loading ? (
                    <Carousel>
                        {data.map((card, index) => (
                            <CardCampaign key={index} data={card} />
                        ))}
                    </Carousel>
                ) : (
                    <div>No hay Datos</div>
                )
            }
            <Link to="/allCampaigns">
                <p className="text-2xl text-center text-blue-title font-bold mt-9 mb-11">
                    Ver Todas las Campañas
                </p>
            </Link>
        </div>
    );
};

export default SectionCampaigns;
 */
