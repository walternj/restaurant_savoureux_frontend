import React  from 'react'

import './popularsDishes.css'
//import api from '../services/api'
import SliderDishes from '../components/bootstrapCarousel'
 
export default function PopularsDishes() {
/*   const [plats, setPlats] = useState([])

  useEffect(() => {
    async function loadPlats () {
      const response = await api.get('./plats')

     setPlats(response.data)
    }
    loadPlats()
  },[]) */

  return (
    <div className="Dishes">
      <div id="content">
        Plats Populaires
      </div>
      <SliderDishes />
    </div>  
  )
}
