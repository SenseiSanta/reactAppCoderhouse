import React from 'react'
import '../Contact/Contact.css'

function Contact() {
  return (
    <div id='contactContainer'>
      <h1> CONTACTANOS <br /> Musical House</h1>
      <div id='contactOptionsBox'>
        <div id='contactOption'>
          <button id='contactButton'> <h3 id='contactText'> Problemas en la WEB </h3> </button>
        </div>
        <div id='contactOption'>
          <button id='contactButton'> <h3 id='contactText'> Inconvenientes con la compra o el pago </h3> </button>
        </div>
        <div id='contactOption'>
          <button id='contactButton'> <h3 id='contactText'> Preguntas y sugerencias </h3> </button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact