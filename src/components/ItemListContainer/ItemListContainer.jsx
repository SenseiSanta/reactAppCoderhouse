import React from 'react';
import ItemList from '../ItemList/ItemList.jsx'

function ItemListContainer( {greeting} ) {
  return (<>
      <div className='w-100 d-flex mt-3 justify-content-center'>{greeting}</div>
      <ItemList />
  </>
  )
}

export default ItemListContainer