//@ts-check
import React, { useState, useEffect } from 'react'
import Item from '../Item/Item.jsx';
import '../ItemList/ItemList.css'

function ItemList( {resultado} ) {
  
  return (<>
      <div id='itemList'>
          <div id='productContainer'>
            {resultado && resultado.map(item => <Item item={item} key={item.id}/> )}
          </div>
      </div>
  </>
  );
};

export default ItemList