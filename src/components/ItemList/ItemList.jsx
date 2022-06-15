import React, { useState, useEffect } from 'react'
import Item from '../Item/Item.jsx';
import itemListcss from '../ItemList/ItemList.css'
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';


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