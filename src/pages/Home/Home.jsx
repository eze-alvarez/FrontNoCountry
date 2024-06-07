import HowToDonate from "../../components/HowDonate/howToDonate";
import SectionCampaigns from "../../components/Sect-Campaigns/sectionCampaigns";
import CardHero from "../../components/UI/Card-Hero/CardHero";

export default function Home() {
  return (
    <div className="w-full px-4 pt-1">
      <CardHero />
      <HowToDonate />
      <SectionCampaigns />
    </div>
  )
}
