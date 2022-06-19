import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartWidgetcss from '../CartWidget/CartWidget.css'

function CartWidget({ items }) {
    return (<>
        <FaShoppingCart style={{width: '45px', height: '40px', color:'#092641'}}/> {items}
    </>)
    }
export default CartWidget