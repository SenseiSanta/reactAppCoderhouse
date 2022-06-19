import React from 'react'
import { Link } from 'react-router-dom'
import itemdetailcss from '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';

function ItemDetail( {item} ) {
  
  return (<>
    <div id='itemDetailBox'>
      <img src={item.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {item.name} </h2>
        <p id='descriptionText'> {item.description} </p>
        <p id='priceText'> ${item.price} </p>
        <ItemCount initial={0} max={10} Id={item.id}/>
      </div>
    </div>
    <div id='backHomeDiv'>
        <Link to='/' id='backHomeLink'> Volver </Link>
    </div>
    </>
  )
}

export default ItemDetail