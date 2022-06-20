import React from 'react'
import img from '../../icons/guitarbg.png'
import bgimagecss from '../BgImage/BgImage.css'

function BgImage() {
  return (
    <div id='bgImageContainer'>
        <img src={img} id='bgImage' alt="fondo principal" />
    </div>
  )
}

export default BgImage