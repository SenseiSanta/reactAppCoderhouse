import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import itemdetailcss from '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';

function ItemDetail( {item} ) {
  const [cant, setCant] = useState(0)
  
  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (<>
    <div id='itemDetailBox'>
      <img src={item.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {item.name} </h2>
        <p id='descriptionText'> {item.description} </p>
        <p id='priceText'> ${item.price} </p>
        {cant == 0 ? <ItemCount cant={cant} setCant={setCant} onAdd={onAdd}/> : <div id='finalizeBox'> <Link to='/cart'> Ver Carrito </Link> </div>}
      </div>
    </div>
    <div id='backHomeDiv'>
        <Link to='/' id='backHomeLink'> Volver </Link>
    </div>
    </>
  )
}

export default ItemDetail