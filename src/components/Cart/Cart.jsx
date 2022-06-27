//@ts-check
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import '../Cart/Cart.css';

function Cart() {

  const { cart, deleteItem, GetCartPrice, GetItemPrice, GetItemQty } = useContext(CartContext);
  const [condition, setCondition] = useState(true)

  const itemsInCart = GetItemQty()
  console.log(itemsInCart)

    return <>
      <div id="cartContainer">
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
            <h2> Total: {GetCartPrice()} </h2>
            <button> Comprar </button>
          </div></>)
        }
      
        {itemsInCart === 0 && (<>
          <p id="cartItemText"> CARRITO VACIO </p> 
          <Link to={"/home"} id="goShopping"> Ir a comprar </Link>
        </>)
        }

      </div>
    </>
}
export default Cart