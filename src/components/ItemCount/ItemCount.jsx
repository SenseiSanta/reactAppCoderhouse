//@ts-check
import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import '../ItemCount/ItemCount.css'

export default function ItemCount( props ) {
    const { cant, setCant, onAdd, max } = props;

    const initial = 1;

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
            <FaCartPlus style={{paddingBottom: '2px', color: '#0a4a13'}} /> Añadir al carrito
        </button>
    </div>
    </>
  )
}
