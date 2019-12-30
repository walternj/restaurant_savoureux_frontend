import React  from 'react'

import './popularsDishes.css'

import SliderDishes from '../components/bootstrapCarousel'
 
export default function PopularsDishes() {

  return (
    <div className="Dishes">
      <div id="content">
        Plats Populaires
      </div>
      <SliderDishes />
    </div>  
  )
}
