import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartWidgetcss from '../CartWidget/CartWidget.css'

function CartWidget({ items }) {
    return (<>
        <a href='*' id='cartLink'> <FaShoppingCart style={{width: '30px', height: '30px', color:'#092641'}}/> {items} </a>
    </>)
    }
export default CartWidget