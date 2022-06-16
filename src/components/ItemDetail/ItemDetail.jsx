import React from 'react'
import { Link } from 'react-router-dom'
import ItemDetailCSS from '../ItemDetail/ItemDetail.css'

function ItemDetail( {item} ) {
  
  return (<>
    <div id='itemDetailBox'>
      <img src={item.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {item.name} </h2>
        <p id='descriptionText'> {item.description} </p>
        <p id='priceText'> ${item.price} </p>
      </div>
    </div>
    <Link to='/' id='backHomeLink'> Volver </Link>
    </>
  )
}

export default ItemDetail