//@ts-check
import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import swal from 'sweetalert'
import '../ItemCount/ItemCount.css'

export default function ItemCount( props ) {
    const { qty, setQty, onAdd, max } = props;

    const initial = 1;

    const handleClickUp = () => {
        if (qty < max) {
            setQty(qty + 1)
        } else {
            swal({
                text: 'No puedes sumar mas de la cantidad en stock',
                icon: 'warning'
            })
        }
    }

    const handleClickDown = () => {
        if (qty > initial) {
            setQty(qty - 1)
        } else {
            swal({
                text: 'No puedes restar items. Debe haber al menos 1',
                icon: 'warning'
            })
        }
    }
     
  return (<>
    <div id='counterBox'>
        <div id='deleteAddButtons'>
            <button id='aditionButton' onClick={handleClickDown}> 
                -
            </button>
            <p id='counter'> {qty} </p>
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
