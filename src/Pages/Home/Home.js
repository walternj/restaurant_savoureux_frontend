import React from 'react';

import './home.css';

import ReservationForm from '../../components/reservationForm'
import PopularsDishes from '../../components/popularsDishes'
import Footer from '../../components/footer'

export default function Home({ history }) {
  return (

      <div className="homeContainer">
        <div  className="begin"> 
          <div className="content">
            <p id="by">FAIT PAR <span>WALTERNJ</span></p>
            <p id="brand">Restaurant Savoureux !</p>
          </div>
          <ReservationForm title="Réservation de table"/>
        </div>
          <PopularsDishes />
          <Footer />
      </div>
   
  );
}
