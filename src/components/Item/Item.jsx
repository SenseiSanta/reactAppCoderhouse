import React from 'react';
import itemcss from '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount.jsx';

function Item({item}) {
    
    const OnAdd = (quantity) => {
        console.log(quantity)
      }

  return (<>
    <div className='card' style={{width: '240px', margin: '20px'}}>
        <div className="card-body" id='cardBody'>
            <p id='cardTitle'>{item.name}</p>
            <img src={item.pictureURL} alt={item.name} style={{width: '150px', height: '150px'}}/>
            <p className="card-text">${item.price}</p>
        </div>
        <a href="#" className="btn" id='productDetails'> Product Details </a>
        <ItemCount initial={0} max={10} OnAdd={OnAdd} Id={item.id}/>
    </div>
    </>
  )
}

export default Item