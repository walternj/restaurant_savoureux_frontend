import React from 'react';

import {Routes} from './routes'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
//import ScrollButton from 'react-scroll-button'

import './App.css';

function App({history}) {
  const buttonUpStyle = {
    backgroundColor: '#F818',
  }

  return (
    <div id="app" className="App">
      <Routes />
      {/* <ScrollButton 
        targetId={'app'}
        behavior={'smooth'}
        buttonBackgroundColor={'#F819'}
      /> */}
      <ScrollUpButton style={buttonUpStyle} AnimationDuration={1000}  />
    </div>
  )
} 

export default App
