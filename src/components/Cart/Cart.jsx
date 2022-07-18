//@ts-check
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import '../Cart/Cart.css';

function Cart() {

  const { cart, deleteItem, GetCartPrice, GetItemPrice, GetItemQty, resetCart } = useContext(CartContext);
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
                                        <p id="cartItemData"> x{item.quantity}</p>
                                        <p id="cartItemData"> ${GetItemPrice(item)} </p>
                                        <button id="trashCan" onClick={() => {deleteItem(item.id)}}> <BsTrash /> </button>
                                      </div>
                                    </div>
          )}
          <div id="finalizeShopping">
            <Link id='finishButton' to={'/buy'}> Buy </Link>
            <h2 id="totalText"> Total - ${GetCartPrice()}</h2>
            <button onClick={() => resetCart()} id='finishButton'> Reset </button>
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