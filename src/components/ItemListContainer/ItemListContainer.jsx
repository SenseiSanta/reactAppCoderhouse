import React from 'react';
import ItemListContainercs from '../ItemListContainer/ItemListContainer.css';

function ItemListContainer( {greeting} ) {
  return (<>
      <div className='w-100 d-flex mt-3 justify-content-center'>{greeting}</div>
  </>
  )
}

export default ItemListContainer