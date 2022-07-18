//@ts-check
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { CartContext } from '../../context/CartContext';

function ItemDetail( {result} ) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false);
  
  const {IsInCart, addItem} = useContext(CartContext)
  
  const onAdd = () => {
    IsInCart(result.id);
    addItem(result, qty);
    setAdded(true);
  }

  return <>

    {/* Pantalla principal sin datos */}
    {!IsInCart(result.id) && (<>
      <div id='itemDetailBox'>
      <img src={result.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {result.name} </h2>
        <p id='descriptionText'> {result.description} </p>
        <p id='priceText'> ${result.price} </p>
        {added ? <div id='finalizeBox'> <Link to='/cart' id='finalizeButton'> Ver Carrito </Link> <Link to='/home' id='finalizeButton'> Seguir Comprando </Link> </div> : <ItemCount qty={qty} setQty={setQty} onAdd={onAdd} max={result.stock}/>}
      </div>
    </div>
    <div id='backHomeDiv'>
        <Link to='/' id='backHomeLink'> Volver </Link>
    </div> </>
    )} 
    
    {/* Pantalla con datos (anti-refresh) */}
    {IsInCart(result.id) && (<>
      <div id='itemDetailBox'>
      <img src={result.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {result.name} </h2>
        <p id='descriptionText'> {result.description} </p>
        <p id='priceText'> ${result.price} </p>
        <div id='finalizeBox'> <Link to='/cart' id='finalizeButton'> Ver Carrito </Link> <Link to='/home' id='finalizeButton'> Seguir Comprando </Link> </div>
      </div>
    </div>
    <div id='backHomeDiv'>
        <Link to='/' id='backHomeLink'> Volver </Link>
    </div> </>
    )} 
    </>
}

export default ItemDetail