import React from 'react'
import ItemDetailCSS from '../ItemDetail/ItemDetail.css'

function ItemDetail( {item} ) {
  return (<>
    <img src={item.pictureURL} id='imgItemDetail' alt="imagen de producto" />
    <div id='itemDetailBox'>
      <h2> {item.name} </h2>
      <p> ${item.price} </p>
      <p id='descriptionText'> {item.description} </p>
      
    </div>
    </>
  )
}

export default ItemDetail