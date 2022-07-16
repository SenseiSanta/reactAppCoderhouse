//@ts-check
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import '../Cart/Cart.css';

function Cart() {

  const { cart, deleteItem, GetCartPrice, GetItemPrice, GetItemQty, emptyCart } = useContext(CartContext);
  const itemsInCart = GetItemQty()
  
    return <>
      <div id="cartContainer">

        {/* OPCION 1: Devuelve el carrito cuando hay items */}
        {itemsInCart !== 0 && (<>
          {cart.map (item =><div id="cartItem">
                                      <div id="firstCol">
                                        <img src={item.pictureURL} alt="" id="cartImg"/>
                                        <p id="cartItemText"> {item.name} </p>
                                      </div>
                                      |
                                      <div id="secondCol">
                                        <p id="cartItemText"> x{item.quantity}</p>
                                        <p id="cartItemText"> ${GetItemPrice(item)} </p>
                                        <button id="trashCan" onClick={() => {deleteItem(item.id)}}> Quitar </button>
                                      </div>
                                    </div>
          )}
          <div id="finalizeShopping">
            <Link id='buyButton' to={'/buy'}> Buy </Link>
            <h2> Total: ${GetCartPrice()} </h2>
            <button onClick={() => emptyCart()}> Reset </button>
          </div></>)
        }
      

        {/* OPCION 2: Devuelve el carrito cuando NO hay items */}
        {itemsInCart === 0 && (
        <div id="emptyCart">
            <p id="cartItemText"> CARRITO VACIO </p> 
            <Link to={"/home"} id="goShopping"> Ir a comprar </Link>
        </div>
        )}

      </div>
    </>
}
export default Cart