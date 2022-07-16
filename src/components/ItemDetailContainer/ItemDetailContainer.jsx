//@ts-check
import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';
import {useEffect, useState} from 'react';
import LoadingWidget from '../LoadingWidget/LoadingWidget.jsx';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);

    setLoading(true)

    getDoc(itemRef).then((snapshot) => {
      setResult({ ...snapshot.data(), id: snapshot.id })
    })
    .catch((error) => setError(error))
    .finally( () => setLoading(false))

  }, [id])
  
  return (<>
  <div>{loading && <LoadingWidget />}</div>
  <div>{error && 'Ha ocurrido un error.'}</div>
  <div id='itemDetailContainer'>{result && <ItemDetail result={result} />} </div>
    </>
  )
}

export default ItemDetailContainer