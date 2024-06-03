
import { CardsInfo } from '../../constants/CardsInfo'
import Carousel from '../UI/carousel/Carousel'
const SectionCampaigns = () => {
  return (
    <div className='flex flex-col mb-11 mt-9' >
      <h1 className='mb-4'>Campañas</h1>
      <Carousel array={CardsInfo} />
      <a className='text-2xl text-center text-blue-title font-bold mt-9 mb-11'>Ver Todas las Campañas</a>
    </div>
  )
}

export default SectionCampaigns