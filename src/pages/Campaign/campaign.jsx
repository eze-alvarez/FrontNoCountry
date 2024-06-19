import { useParams } from "react-router-dom";
import FullCard from "../../components/UI/Full-Card-Campaign/fullCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCampaignId } from "../../redux/actions/actions";

const Campaign = () => {
     const selectedCampaign = useSelector(
          (state) => state.campaignInfo.selectedCampaign
     );
     const dispatch = useDispatch();
     const { index } = useParams();

     useEffect(() => {
          const fetchData = async () => {
               await dispatch(getCampaignId(index));
          };
          fetchData();
     }, [index]);

     if (!selectedCampaign) {
          return <p>Cargando...</p>;
     }

     return (
          <>
               <h1 className="my-4">Campaña</h1>
               <FullCard data={selectedCampaign} />
          </>
     );
};

export default Campaign;
