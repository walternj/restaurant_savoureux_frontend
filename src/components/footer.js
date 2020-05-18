import React from 'react'

import './footer.css'
import ic_phone from '../assets/icons/phone-alt-solid.svg'
import ic_email from '../assets/icons/at-solid.svg'
import ic_chat from '../assets/icons/comments-solid.svg'
import ic_facebook from '../assets/icons/facebook-square-brands.svg'
import ic_instagran from '../assets/icons/instagram-brands.svg'
import ic_linkedin from '../assets/icons/linkedin-brands.svg'
import ic_youtube from '../assets/icons/youtube-brands.svg'

export default function Footer() {

  return (
    <div className="footerContent">
      <article>
        <p id="footerTitle">NOUS CONTACTER</p>

        <div id="contacts">
          <p><img src={ic_phone} alt="telephone"  />  +33 65 92 89 32</p>
          <p><img src={ic_email} alt="email" /> walternj@hotmail.com</p>
          <p><img src={ic_chat} alt="chat" /> Chat</p>
        </div>
      </article>
      <article>
        <p id="footerTitle">RESEAUX SOCIAUX</p>

        <div id="reseauxSociaux">
          <img src={ic_facebook} alt="facebook" />
          <img src={ic_instagran} alt="instagran"/>
          <img src={ic_linkedin} alt="linkedin" />
          <img src={ic_youtube} alt="youtube"/>  
        </div>
      </article>
      <div id="credits">
        <p id='devBy'>©2019 - Développé par <span> WALTERNJ</span> </p> 
        <p>TECHS:</p>
        <p>#JavaScript #ReactJS #ReactNative #Redux #HTML5 #CSS3 #Responsive #Frontend #Backend #Node.js #Express #MongoDB #SQL #GIT #GITHUB </p>
      </div>
    </div>
  )
}
