import React from "react";
import CardHowTo from "../UI/Card-HowTo/cardHowTo";

import Img1 from "../../assets/Images/HowToDonate/ComoDonar1.png";
import Img2 from "../../assets/Images/HowToDonate/ComoDonar2.png";
import Img3 from "../../assets/Images/HowToDonate/ComoDonar3.png";
import Carousel from "../UI/Carousel/carousel";

const HowToDonate = () => {
    return (
        <div className="flex flex-col mb-11 mt-9">
            <h1 className="">¿Como donar?</h1>
            <Carousel>
                <CardHowTo
                    IMG={Img1}
                    H1="Elegí tu campaña"
                    P="Explora nuestras campañas y selecciona la que más te inspire."
                />
                <CardHowTo
                    IMG={Img2}
                    H1="Registra tus datos"
                    P="Completa un breve formulario con tus datos para validar tu donación."
                />
                <CardHowTo
                    IMG={Img3}
                    H1="Realiza la transferencia"
                    P="Segui las instrucciones para transferir tu donación de forma segura y rápida."
                />
            </Carousel>
        </div>
    );
};

export default HowToDonate;
