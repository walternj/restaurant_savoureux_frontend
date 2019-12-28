import React from 'react';

import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'

import ReservationForm from '../../components/reservationForm'
import PopularsDishes from '../../components/popularsDishes'
import Footer from '../../components/footer'

import './home.css';
export default function Home({ history }) {
  const buttonUpStyle = {
    backgroundColor: '#F818',
  }
  return (

      <div className="homeContainer">
        <div  className="begin"> 
          <div className="content">
            <p id="by">FAIT PAR <span>WALTERNJ</span></p>
            <p id="brand">Restaurant Savoureux !</p>
          </div>
          <ReservationForm title="Réservation de table"/>
        </div>
        <ScrollUpButton style={buttonUpStyle} AnimationDuration={1000}  />
          <PopularsDishes />
          <Footer />
      </div>
   
  );
}
