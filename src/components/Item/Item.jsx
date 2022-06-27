//@ts-check
import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'

function Item({item}) {
    
  return (<>
    <div className='card' id='cardStyle'>
        <div className="card-body" id='cardBody'>
            <p id='cardTitle'>{item.name}</p>
            <img src={item.pictureURL} alt={item.name} style={{width: '150px', height: '150px'}}/>
            <p id='cardPrice'>${item.price}</p>
        </div>
        <Link to={`/product/${item.id}`} className="btn" id='productDetails'> Ver Producto </Link>
    </div>
    </>
  )
}

export default Item