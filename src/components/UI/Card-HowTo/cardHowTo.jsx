import React from "react";


const CardHowTo = ({IMG,H1,P}) => {
    return (
        <div  className=" m-auto  max-w-340 h-407 flex flex-col items-center relative">
            <div
                className="circle"
                class=" bg-fondo-card rounded-full w-48 h-48 relative bottom-50 z-10 flex items-center justify-center"
            >
              <div className=" bg-main-white h-44 w-44 rounded-full p-7" >
                <img src={IMG} alt="Card Campaign" className=" object-fit" />
              </div>
            </div>
            <div
                className="textContainer"
                class=" bg-main-white rounded-2xl m-auto flex flex-col justify-end  h-327 absolute bottom-0  pb-16 text-center"
            >
                <h1 className="mb-5 mt-9h">{H1}</h1>
                <p className="px-14">
                    {P}
                </p>
            </div>
        </div>
    );
};

export default CardHowTo;
