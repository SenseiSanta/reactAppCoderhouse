//@ts-check
import React from 'react';
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'

function Item({item}) {
    
  const { IsInCart } = useContext(CartContext)

  return (<>
    {!IsInCart(item.id) && (
    <div className='card' id='cardStyle'>
        <div className="card-body" id='cardBody'>
            <p id='cardTitle'>{item.name}</p>
            <img src={item.pictureURL} alt={item.name} style={{width: '150px', height: '150px'}}/>
            <p id='cardPrice'>${item.price}</p>
            <p id='cardStock'>Stock: {item.stock}</p>
        </div>
        <Link to={`/product/${item.id}`} className="btn" id='productDetails'> Ver mas </Link>
    </div>
    )}

    {IsInCart(item.id) && (
    <div className='card' id='cardStyle'>
        <div className="card-body" id='cardBody'>
            <p id='cardTitle'>{item.name}</p>
            <img src={item.pictureURL} alt={item.name} style={{width: '150px', height: '150px'}}/>
            <p id='inCartText'> Ya posees este item en tu carrito ve a <br /> 
            <Link to={`/cart`} id='auxLink'> CARRITO </Link> <br /> para modificar </p>

        </div>
    </div>
    )}
    </>
  )
}

export default Item