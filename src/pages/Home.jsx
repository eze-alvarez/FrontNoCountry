import Navbar from "../components/navbar/Navbar"
import SectionCampaigns from "../components/Sect-Campaigns/SectionCampaigns"
// import CardCampaign from "../components/UI/card-Campaign/CardCampaign";

export default function Home() {
  return (
    <div className="w-full h-screen px-4">
      <Navbar/>
      <SectionCampaigns />
    </div>
  )
}