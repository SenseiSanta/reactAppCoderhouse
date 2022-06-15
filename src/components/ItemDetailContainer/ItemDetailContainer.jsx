import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemDetailContainerCSS from '../ItemDetailContainer/ItemDetailContainer.css'
import {useEffect, useState} from 'react';
import Item from '../Item/Item.jsx';
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';

function ItemDetailContainer( {item} ) {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState();

  useEffect(() => {
    const itemRender = new Promise ((res, rej) => {
      setTimeout(() => {
        res('Exitosa')
      }, 1000);
    });

    itemRender
      .then((result) =>{
        setResultado(true);
    })
    .catch((error) => {
        setError(true);
    })
    .finally(() => {
        setLoading(false);
    })

  },[])
  

  return (<>
  <h1>ItemDetailContainer</h1>
  <div>{loading && <LoadingWidget />}</div>
  <div>{error && 'Ha ocurrido un error.'}</div>
  <div id='itemDetailContainer'>{resultado && <ItemDetail item={item} key={item.id} />} </div>
    </>
  )
}

export default ItemDetailContainer