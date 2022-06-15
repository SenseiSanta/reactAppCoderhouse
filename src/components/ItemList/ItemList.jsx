import React, { useState, useEffect } from 'react'
import Item from '../Item/Item.jsx';
import itemListcss from '../ItemList/ItemList.css'
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';


function ItemList( props ) {

    const { error, resultado, loading } = props
  
  return (<>
      <div id='itemList'>
          <div>{loading && <LoadingWidget />}</div>
          <div>{error && 'Ha ocurrido un error.'}</div>
          <div id='productContainer'>
            {resultado && resultado.map(item => <Item item={item} key={item.id}/> )}
          </div>
      </div>
  </>
  );
};

export default ItemList