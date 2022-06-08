import React, { useState, useEffect } from 'react'
import Item from '../Item/Item.jsx';
import itemListcss from '../ItemList/ItemList.css'


function ItemList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        const items = new Promise ((res, rej) => {
            setTimeout(() => {
                res([
                    {id: 1, name: 'Guitarra electrica Alabama TL-201', price: 2500, description: '', pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_736346-MLA44916270140_022021-O.webp'}, 
                    {id: 2, name: 'Guitarra electrica Les Paul SX EE3 SERIES', price: 3000, description: '', pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_898146-MLA31579260003_072019-O.jpg'},
                    {id: 3, name: 'Guitarra electrica Les Paul Epiphone Special VE', price: 1800, description: '', pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_660319-MLA43545062717_092020-O.webp'}]);
            }, 2000);
        });

        items
            .then((result) =>{
                setResultado(result);
            })
            .catch((error) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
  
  return (<>
      <div id='itemList'>
          <div>{loading && 'Loading..'}</div>
          <div>{error && 'Ha ocurrido un error.'}</div>
          <div id='productContainer'>{resultado && resultado.map(item => <Item item={item} key={item.id}/> )
        }</div>
      </div>
  </>
  );
};

export default ItemList