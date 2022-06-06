import { counter } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import ItemCountcss from '../ItemCount/ItemCount.css'

export default function ClickTracker( {initial, max, OnAdd} ) {
    const [counter, setCounter] = useState(initial);

    const handleClickUp = () => {
        if (counter < max) {
            setCounter(counter + 1)
        } else {
            alert('No puedes sumar')
        }
    }

    const handleClickDown = () => {
        if (counter > initial) {
            setCounter(counter - 1)
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
            <p id='counter'> {counter} </p>
            <button id='aditionButton' onClick={handleClickUp}>
                +
            </button>
        </div>
        <button id='addToCart' onClick={() => {OnAdd(counter)}}>
            <FaCartPlus style={{paddingBottom: '2px', color: '#397e46'}} /> Añadir al carrito
        </button>
    </div>
    </>
  )
}
