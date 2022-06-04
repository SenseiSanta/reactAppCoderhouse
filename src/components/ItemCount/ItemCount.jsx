import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import ItemCountcss from '../ItemCount/ItemCount.css'

export default function ClickTracker( {inicial, maximo} ) {
    const [contador, setContador] = useState(inicial);

    const handleClickUp = () => {
        if (contador < maximo) {
            setContador(contador + 1)
        } else {
            alert('No puedes sumar')
        }
    }

    const handleClickDown = () => {
        if (contador > inicial) {
            setContador(contador - 1)
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
            <p id='counter'> {contador} </p>
            <button id='aditionButton' onClick={handleClickUp}>
                +
            </button>
        </div>
        <button id='addToCart'>
            <FaCartPlus style={{paddingBottom: '2px', color: '#397e46'}} /> Añadir al carrito
        </button>
    </div>
    </>
  )
}
