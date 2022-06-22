import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cartcss from '../Cart/Cart.css';

function Cart() {

  const { cart } = useContext(CartContext);
  return <>
    <div id="cartContainer">
      {cart && cart.map(item => <><p>{item.id}</p>
                                <p>{item.name}</p> 
                                <p style={{paddingLeft: '20px', fontSize: '24px'}}> TIENES: {item.quantity} de este producto</p></>  )}
    </div>
  </>
}

export default Cart;