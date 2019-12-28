import React from 'react';

import {Routes} from './routes'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
//import ScrollButton from 'react-scroll-button'
import ScrollToTop from 'react-scroll-up'

import './App.css';

function App({history}) {
  const buttonUpStyle = {
    backgroundColor: '#F818',
    marginRight: '30px'
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
      <ScrollToTop 
        showUnder={160}
        topPosition={30}   
        
      >
        <span>UP</span>
      </ScrollToTop>  
    </div>
  )
} 

export default App
