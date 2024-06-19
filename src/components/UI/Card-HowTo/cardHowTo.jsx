import React from "react";


const CardHowTo = ({IMG,H1,P}) => {
    return (
        <div  className=" m-auto shadow-card-shadow mt-5 mb-10 md:mt-10 w-[95%] max-w-340 h-407 flex flex-col items-center relative">
            <div
                className=" bg-nav rounded-full w-48 h-48 relative bottom-50 z-10 flex items-center justify-center"
            >
              <div className=" bg-main-white h-44 w-44 rounded-full p-7" >
                <img src={IMG} alt="Card Campaign" className=" object-fit" />
              </div>
            </div>
            <div
                className=" bg-main-white rounded-2xl px-1 m-auto flex flex-col justify-end  h-327 absolute bottom-0 text-center"
            >
                <h1 className="mb-5">{H1}</h1>
                <p className=" px-9 h-[135px]">
                    {P}
                </p>
            </div>
        </div>
    );
};

export default CardHowTo;
