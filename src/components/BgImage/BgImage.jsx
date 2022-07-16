//@ts-check
import React from 'react'
import img from '../../icons/2ndBackGroundDark.png'//* guitarbg.png */
import '../BgImage/BgImage.css'

function BgImage() {
  return (
    <div id='bgImageContainer'>
        <img src={img} id='bgImage' alt="fondo principal" />
    </div>
  )
}

export default BgImage