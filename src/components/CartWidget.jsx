import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ items }) {
    return (<>
        <a href='*'> <FaShoppingCart style={{width: '30px', height: '30px', color:'#092641'}}/> </a>
        {items}
    </>)
    }
export default CartWidget