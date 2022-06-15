import React from 'react';
import ItemList from '../ItemList/ItemList.jsx'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';
import catalogo from '../../catalogo'

function ItemListContainer( props ) {
    
const categoriaID = useParams();
const {greeting} = props;
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [resultado, setResultado] = useState([]);

console.log(categoriaID)

  useEffect(() => {
    setLoading(true)
      const items = new Promise ((res, rej) => {
        setTimeout(() => {
            res(catalogo);
        },);
      });

    items
        .then((result) => {
            categoriaID
            ? setResultado(result.filter(item => item.category === categoriaID.id))
            : setResultado(result)
        }) 
        .catch((error) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })

  }, [categoriaID])

  return (<>
      <h2 className='w-100 d-flex mt-3 justify-content-center'>{greeting}</h2>
      <div>{loading && <LoadingWidget />}</div>
      <div>{error && 'Ha ocurrido un error.'}</div>
      <ItemList resultado={resultado}/>
  </> 
  )
}

export default ItemListContainer