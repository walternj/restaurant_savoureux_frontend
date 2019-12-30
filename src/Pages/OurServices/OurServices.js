import React from 'react'

import Footer from '../../components/footer'
import ic_cocktail from '../../assets/icons/martini.png'
import ic_gastronomie from '../../assets/icons/chef.png'
import ic_delivery from '../../assets/icons/delivery.png'

import './OurServices.css'
export default function OurServices() {
  return (
    <div className="ourServicesContainer">
      <div id="headerServices">
        <p id="by">FAIT PAR <span>WALTERNJ</span></p>
        <p>Restaurant Savoureaux!</p>
      </div>

      <div id="servicesContaint">
        <p id="servicesTitle">Nous Services</p>
        
        <article id="services">
          <p><img src={ic_cocktail} alt="cocktail"/>
          <strong>Cocktails</strong>
            Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.
          </p> 
            
          <p><img src={ic_gastronomie} alt="gastronimie"/>
            <strong>Gastronimie Créative</strong>
            Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.
          </p> 
          
          <p><img src={ic_delivery} alt="livraison" />
            <strong>Livraison</strong>
            Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.
          </p>
        </article>    
        
        <article id="services">
          <p><img src={ic_cocktail} alt="cocktail" />
            <strong>Cocktails</strong>
            Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.
          </p> 
          
          <p><img src={ic_gastronomie} alt="gastronimie"/>
            <strong>Gastronimie Créative</strong>
            Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.
          </p> 
          
          <p><img src={ic_delivery} alt="livraison" />
            <strong>Delivary</strong>
            Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Delegadis gente finis, bibendum egestas augue arcu ut est. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga.
          </p>
        </article>    
      </div>
      <Footer />
    </div>
  )
}
