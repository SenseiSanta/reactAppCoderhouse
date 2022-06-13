import React from 'react';
import ItemList from '../ItemList/ItemList.jsx'

function ItemListContainer( {greeting} ) {
  return (<>
      <h2 className='w-100 d-flex mt-3 justify-content-center'>{greeting}</h2>
      <ItemList />
  </>
  )
}

export default ItemListContainer