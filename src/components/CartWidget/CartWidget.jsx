//@ts-check
import React from 'react';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import '../CartWidget/CartWidget.css'

function CartWidget() {
    
    const { GetItemQty } = useContext(CartContext);
    
    return (<>
        <FaShoppingCart id='cartLink'/> {GetItemQty()}
    </>)
    }
export default CartWidget