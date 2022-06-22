import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import ItemCountcss from '../ItemCount/ItemCount.css'

export default function ItemCount( props ) {
    const { cant, setCant, onAdd } = props;

    const [initial, setInitial] = useState(1);
    const [max, setMax] = useState(10);

    const handleClickUp = () => {
        if (cant < max) {
            setCant(cant + 1)
        } else {
            alert('No puedes sumar')
        }
    }

    const handleClickDown = () => {
        if (cant > initial) {
            setCant(cant - 1)
        } else {
            alert('No puedes restar')
        }
    }
     
  return (<>
    <div id='counterBox'>
        <div id='deleteAddButtons'>
            <button id='aditionButton' onClick={handleClickDown}> 
                -
            </button>
            <p id='counter'> {cant} </p>
            <button id='aditionButton' onClick={handleClickUp}>
                +
            </button>
        </div>
        <button id='addToCart' onClick={() => {
            onAdd();
            }}>
            <FaCartPlus style={{paddingBottom: '2px', color: '#397e46'}} /> Añadir al carrito
        </button>
    </div>
    </>
  )
}
