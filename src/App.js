import React from 'react';

import {Routes} from './routes'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
//import ScrollButton from 'react-scroll-button'
//import ScrollToTop from 'react-scroll-up'

import './App.css'

function App({history}) {
/*   const buttonUpStyle = {
    backgroundColor: '#F818',
    marginRight: '30px'
  } */

  return (
    <div id="app" className="App">
      <Routes />
{/*       <ScrollUpButton 
        style={buttonUpStyle} 
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={1000} 
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
      /> */}
    </div> 
   
  )
} 

export default App
