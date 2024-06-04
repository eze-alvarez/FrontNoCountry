import React, { useState } from 'react'
import Heart from "../../../assets/Images/commonImg/heart.png";
const FullCard = ({data}) => {
     const [currency, setCurrency] = useState('ARS');
     const [amount, setAmount] = useState('');
     const infoCard = data;
     const progress = (infoCard.acumulate * 100) / infoCard.goal;

     const handleCurrency = (e) => {
          setCurrency(e.target.value);

     }

     const handleAmount = (e) => {
          setAmount(Number(e.target.value));
     }

     const handleDonation = () => {
          if (amount !== undefined && amount !== null && amount > 0) {
               console.log('Donation: ', amount);
          }else{
               console.log("Invalid donation")
          }
     }

     return (
         <div className=" max-w-370 h-888 bg-main-white rounded-2xl m-auto flex flex-col">
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
                 >
                 {infoCard.description}
                 </p>
 
                 {/* Barra */}
                 <div
                     className="ProgressDonation"
                     class="grow flex items-center justify-between relative w-11/12 text-center"
                 >
                     <div
                         className="ProgressIcon"
                         style={{ left: `${progress}%` }}
                         class=" absolute w-1 h-1 flex items-center justify-center"
                     >
                         <div
                             style={
                                 progress < 60
                                     ? { backgroundColor: "#FFB905" }
                                     : { backgroundColor: "#2EBF7E" }
                             }
                             class="w-11 h-11 absolute rounded-full flex items-center justify-center"
                         >
                             <img
                                 class="object-contain"
                                 src={Heart}
                                 alt="Heart"
                             />
                         </div>
                     </div>
 
                     <div class="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden border-solid border-2">
                         <div
                             class="flex flex-col justify-center overflow-hidden bg-orange-bar whitespace-nowrap "
                             style={{ width: `${progress}%`, maxWidth: "60%" }}
                             role="progressbar"
                         ></div>
                         {progress > 60 ? (
                             <div
                                 class="flex flex-col justify-center overflow-hidde bg-green-bar whitespace-nowrap "
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
                     class="w-full flex items-center justify-between py-3"
                 >
                     <p class="text-2xl text-blue-title font-bold">
                         ${infoCard.acumulate}
                     </p>
                     <p class=" text-blue-text">Objetivo: ${infoCard.goal}</p>
                 </div>
                 <h1 className='mt-12 mb-4'>¡Hacé tu donación!</h1>
                 <div className="flex flex-row items-center justify-between">
                    <select value={currency} onChange={handleCurrency} className="bg-main-white border-2 border-blue-text text-blue-text rounded-lg w-107 h-45 pl-3">
                         <option value="ARS" >$ARS</option>
                         <option value="USD">$USD</option>
                         <option value="EUR">€EUR</option>
                    </select>
                    <input type="number" min={1} value={amount} onChange={handleAmount} className="bg-main-white border-2 border-blue-text text-blue-text rounded-lg w-182 h-45 pl-3" placeholder="500"/>
                 </div>
                 <div className="flex flex-row items-center justify-between mt-4">
                    <button className='w-92 h-45 bg-blue-text rounded-lg text-white' onClick={()=>setAmount(1000)}>{currency} 1000</button>
                    <button className='w-92 h-45 bg-blue-text rounded-lg text-white' onClick={()=>setAmount(3000)}>{currency} 3000</button>
                    <button className='w-92 h-45 bg-blue-text rounded-lg text-white' onClick={()=>setAmount(5000)}>{currency} 5000</button>
                 </div>

                 <button class="bg-btn-orange h-42 w-110 rounded-full my-6 self-center "  onClick={handleDonation}>
                     <p className="text-white text-xs font-bold">Doná ahora</p>
                 </button>
                 <p className='px-9 text-xs font-bold text-center' >*Te redireccionaremos a tu cuenta de Mercado Pago</p>
             </div>
         </div>
     );
}

export default FullCard