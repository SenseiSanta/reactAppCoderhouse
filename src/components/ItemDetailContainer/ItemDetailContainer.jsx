import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemDetailContainerCSS from '../ItemDetailContainer/ItemDetailContainer.css'
import {useEffect, useState} from 'react';
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';
import { useParams } from 'react-router-dom';
import catalogo from '../../catalogo'

function ItemDetailContainer() {
  
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const Filtrar = (array, id) => {
    let selectedItem = array.find((item) => {
      return item.id === parseInt(id);
    });
    setItem(selectedItem);
    setLoading(false);
  };

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(catalogo);
      }, 2000);
    });
    getItems.then((data) => {
      Filtrar(data, id);
    });
  }, [id]);
  
  return (<>
  <h1 id='itemDetailTitle'> Detalle de producto: </h1>
  <div>{loading && <LoadingWidget />}</div>
  <div id='itemDetailContainer'>{item && <ItemDetail item={item} />} </div>
    </>
  )
}

export default ItemDetailContainer