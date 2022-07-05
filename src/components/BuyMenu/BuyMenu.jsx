import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../BuyMenu/BuyMenu.css';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

function BuyMenu() {

  const { cart, GetCartPrice, GetItemQty, emptyCart } = useContext(CartContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState('');
  const [idCompra, setIdCompra] = useState('');
  const [recentPurchase, setRecentPurchase] = useState(false)
  const itemsInCart = GetItemQty();
  
  const db = getFirestore();
  const orderCollection = collection(db, 'orders')

  function handleClick(){

    const order = {
      buyer: { name, email, cel },
      items: cart,
      total: GetCartPrice()
    }

  addDoc(orderCollection, order).then(({id})=> {
      setIdCompra(id);
      setRecentPurchase(true)
      emptyCart();
    })
    
  }
  
  return (<>
    
    {/* Pantalla Post Compra */}
      { (itemsInCart === 0 & recentPurchase) && (<> 
        <h1 id='buyMenuTitle'> Tu compra ha sido un exito. Su ticket de seguimiento es: {idCompra} </h1>
        <Link id='linkToHome' to={'/'}> Ver mas productos </Link>
      </>)}

    {/* Pantalla sin compra ni items */}
      { (itemsInCart === 0 & !recentPurchase) && (<> 
        <h1 id='buyMenuTitle'> Ops, parece que aun no tienes items para comprar, clickea en el siguiente boton para ir a comprar </h1>
        <Link id='linkToHome' to={'/'}> Ir a comprar </Link>
      </>)}
    
    {/* Pantalla previa a comprar - Completado de formulario de compra */}
      {itemsInCart !== 0 && (<>
      
      <h1 id='buyMenuTitle'> Para finalizar su compra, por favor, complete el siguiente formulario</h1>
      <form id='form'>
        
        {/* Nombre */}
        <label> Nombre: </label>
        <input onChange={(e) => setName(e.target.value)} placeholder="ingrese su nombre" type="text" id="name" />
        
        {/* Mail */}
        <label> Correo electrónico: </label>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="ingrese su correo electronico" type="email" id="mail" />
        
        {/* Telefono */}
        <label> Telefono/Celular: </label>
        <input onChange={(e) => setCel(e.target.value)} placeholder="ingrese su celular" type="tel" id="cel" />
      </form>

      {/* Finalizar Compra */}
      <button onClick={() => handleClick()}> Finalizar </button>
    </>)}

    </>)
}

export default BuyMenu