/* //@ts-check */
import React from 'react';
import ItemList from '../ItemList/ItemList.jsx'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer( props ) {
    
const [resultado, setResultado] = useState([]);
const categoriaID = useParams();
const {greeting} = props;
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

  useEffect(() => {
  
    const db = getFirestore();
    const itemCollection = collection(db, 'items');

    setLoading(true)

    if (categoriaID.id) {
      const filter = query(itemCollection, where('category', '==', categoriaID.id));
      getDocs(filter).then((snapshot) => { 
        setResultado(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      })
      .catch( (error) => console.log(`Ha ocurrido un error ' + ${error}`) )
      .finally( ()=> setLoading(false) )

    } else {
      getDocs(itemCollection).then((snapshot) => { 
        setResultado(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      })
      .catch( (error) => setError(`Ha ocurrido un error ' + ${error}`) )
      .finally( ()=> setLoading(false) )
    }

  }, [categoriaID])

  return (<>
      <h1 className='w-100 d-flex justify-content-center text-black'>{greeting}</h1>
      {loading && <LoadingWidget />}
      {error && 'Ha ocurrido un error.'}
      <ItemList resultado={resultado}/>
  </> 
  )
}

export default ItemListContainer