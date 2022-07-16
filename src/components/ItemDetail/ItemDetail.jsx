//@ts-check
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { CartContext } from '../../context/CartContext';

function ItemDetail( {result} ) {
  const [cant, setCant] = useState(1)
  const [added, setAdded] = useState(false);
  
  const {IsInCart, addItem} = useContext(CartContext)
  
  const onAdd = () => {
    IsInCart(result.id);
    addItem(result, cant);
    setAdded(true);
  }

  return (<>
    <div id='itemDetailBox'>
      <img src={result.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {result.name} </h2>
        <p id='descriptionText'> {result.description} </p>
        <p id='priceText'> ${result.price} </p>
        {added ? <div id='finalizeBox'> <Link to='/cart' id='finalizeButton'> Ver Carrito </Link> <Link to='/home' id='finalizeButton'> Seguir Comprando </Link> </div> : <ItemCount cant={cant} setCant={setCant} onAdd={onAdd} max={result.stock}/>}
      </div>
    </div>
    <div id='backHomeDiv'>
        <Link to='/' id='backHomeLink'> Volver </Link>
    </div>
    </>
  )
}

export default ItemDetail