import React from 'react'

import './reservation.css'

import FormReservation from '../../components/reservationForm'
import Footer from '../../components/footer'

export default function Reservation() {

  return (
    <div className="reservationContainer">
      <div className="contentReservation">
          <p>Réservation</p>
        <FormReservation  />
      </div>
      <Footer />
    </div>
   

  )
}
