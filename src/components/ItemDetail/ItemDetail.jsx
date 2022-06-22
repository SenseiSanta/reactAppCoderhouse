import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { CartContext } from '../../context/CartContext';

function ItemDetail( {item} ) {
  const [cant, setCant] = useState(1)
  const [added, setAdded] = useState(false);
  
  const {IsInCart, addItem} = useContext(CartContext)
  
  const onAdd = () => {
    alert(cant);
    IsInCart(item.id);
    addItem(item, cant);
    setAdded(true);
  }

  return (<>
    <div id='itemDetailBox'>
      <img src={item.pictureURL} id='imgItemDetail' alt="imagen de producto" />
      <div id='itemBox'>
        <h2 id='nameText'> {item.name} </h2>
        <p id='descriptionText'> {item.description} </p>
        <p id='priceText'> ${item.price} </p>
        {added ? <div id='finalizeBox'> <Link to='/cart'> Ver Carrito </Link> </div> : <ItemCount cant={cant} setCant={setCant} onAdd={onAdd}/>}
      </div>
    </div>
    <div id='backHomeDiv'>
        <Link to='/' id='backHomeLink'> Volver </Link>
    </div>
    </>
  )
}

export default ItemDetail