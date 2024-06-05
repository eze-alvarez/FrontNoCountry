import HowToDonate from "../../components/HowDonate/howToDonate";
import SectionCampaigns from "../../components/Sect-Campaigns/sectionCampaigns";
import TextHero from "../../components/UI/TextHero/textHero";


export default function Home() {
  return (
    <div className="w-full px-4">
      <TextHero/>
      <HowToDonate />
      <SectionCampaigns />
    </div>
  )
}
