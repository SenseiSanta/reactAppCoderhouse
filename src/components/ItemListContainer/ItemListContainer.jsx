import React from 'react';
import ItemList from '../ItemList/ItemList.jsx'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';
import catalogo from '../../catalogo'

function ItemListContainer( props ) {
    
const [resultado, setResultado] = useState([]);
const categoriaID = useParams();
const {greeting} = props;
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
      const items = new Promise ((res, rej) => {
        setTimeout(() => {
            res(catalogo);
        }, 2000);
      });

    items
        .then((result) => {
            if(categoriaID.id === 'key' || categoriaID.id === 'drum' || categoriaID.id === 'guitar'){
                setResultado(result.filter(item => item.category === categoriaID.id));
                } else {
                setResultado(result);
                }
                setLoading(false);
        }) 
        .catch((error) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    
    console.log(resultado)

  }, [categoriaID])

  return (<>
      <h1 className='w-100 d-flex justify-content-center text-black'>{greeting}</h1>
      <div>{loading && <LoadingWidget />}</div>
      <div>{error && 'Ha ocurrido un error.'}</div>
      <ItemList resultado={resultado}/>
  </> 
  )
}

export default ItemListContainer