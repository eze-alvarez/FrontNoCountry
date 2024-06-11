
import { useParams } from 'react-router-dom'
import { CardsInfo } from '../../constants/cardsInfo'
import FullCard from '../../components/UI/Full-Card-Campaign/fullCard'

const Campaign = () => {
     const { id } = useParams()
  return (
    <div className='px-4'>
     <h1 className='my-4' >Campaña</h1>
     <FullCard data={CardsInfo[id]} />
    </div>
  )
}

export default Campaign