import React,{ useEffect, useState } from "react";

import api from '../services/api'

import Carousel from 'react-bootstrap/Carousel'
import './bootstrapCarousel.css'

export default function BootsCarousel () {
  const [plats, setPlats] = useState([])

  useEffect(() => {
    async function loadPlats () {
      try {
        const response = await api.get('./plats')
        setPlats(response.data)
      }
      catch (err) {
        console.warn(err)
      }
    }
    loadPlats()
  },[])

  function carousel () {
    return(
      <div className="popularsDishes">
      <Carousel id="ul" className="carousel slide" >
       
        {plats.map(plat => (
          <Carousel.Item id="li" key={plat._id} >  
            <img src={plat.photo_url} alt={plat.title} className="d-block w-100" />
            <Carousel.Caption >
              <strong>{plat.title}</strong>
              <p>{plat.description}</p>
              <span>{plat.price}€</span>
            </Carousel.Caption> 
          </Carousel.Item>
        ))}
        
      </Carousel>
      <span aria-hidden="true" className="carousel-control-next-icon" /> 
    </div>
    )

  }

  return(
    carousel()
  )
}