import React from 'react';
import swal from 'sweetalert'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../BuyMenu/BuyMenu.css';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import LoadingWidget from '../LoadingWidget/LoadingWidget';

function BuyMenu() {

  const { cart, GetCartPrice, GetItemQty, emptyCart } = useContext(CartContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState('');
  const [loading, setLoading] = useState(false);
  const [idTicket, setIdTicket] = useState('');
  const [recentPurchase, setRecentPurchase] = useState(false)
  const itemsInCart = GetItemQty();
  
  const db = getFirestore();
  const orderCollection = collection(db, 'orders')

  function validacion() {

    /* Validacion de nombre */
    if ( name === null || name.length === 0 ) {
      swal({
        text: 'Ey, no vemos tu nombre, puedes completar la casilla?'
      });
      setLoading(false)
      return false;

    /* Validacion de email */
    } else if ( email === null || email.length === 0 ) {
      swal({
        text: 'Debes completar con un correo electronico valido'
      });
      setLoading(false)
      return false;

    /* Validacion de arroba y punto en email */
    } else if (!email.includes('@' && '.')) {
      swal({
        text: 'El mail ingresado es incorrecto, revisalo'
      });
      setLoading(false)
      return false;

    /* Validacion de telefono celular */
    } else if ( cel === null || cel.length < 6 || !/^([0-9])*$/.test(cel) ) {
      swal({
        text: 'Ese telefono no existe, podrias revisarlo?'
      });
      setLoading(false)
      return false;
    }
  
    return true;
  } 

  function handleClick(){

    setLoading(true)

    if (validacion()) {
    const order = {
      buyer: { name, email, cel },
      items: cart,
      total: GetCartPrice()
    }

    addDoc(orderCollection, order).then(({id})=> {
      setIdTicket(id);
      setRecentPurchase(true)
      emptyCart();
    }).finally(()=>{
      setLoading(false)
    })}
  } 
  
  return (<>

  {loading && <LoadingWidget />}
    {/* Pantalla Post Compra */}
      { (itemsInCart === 0 & recentPurchase) && (<>
        <h1 id='buyMenuTitle'> Tu compra ha sido un exito. Su ticket de seguimiento es: {idTicket} </h1>
        <div id='linkContainer'> <Link id='linkToHome' to={'/'}> Ver mas productos </Link> </div>
      </>)}

    {/* Pantalla sin compra ni items */}
      { (itemsInCart === 0 & !recentPurchase) && (<> 
        <h1 id='buyMenuTitle'> Ops, parece que aún no tienes items en el carrito <br /> Clickeá en el siguiente boton para ir a comprar: </h1>
        <div id='linkContainer'> <Link id='linkToHome' to={'/'}> Ir a comprar </Link> </div>
      </>)}
    
    {/* Pantalla previa a comprar - Completado de formulario de compra */}
      {itemsInCart !== 0 && (<>
      <h1 id='buyMenuTitle'> Para finalizar su compra, por favor, complete el siguiente formulario</h1>
      <form id='form'>
        
        {/* Nombre */}
        <label id='labelBuyForm'> Nombre: </label>
        <input className='inputBuyForm' onChange={(e) => setName(e.target.value)} placeholder="ingrese su nombre" type="text" id="name" />
        
        {/* Mail */}
        <label id='labelBuyForm'> Correo electrónico: </label>
        <input className='inputBuyForm' onChange={(e) => setEmail(e.target.value)} placeholder="ingrese su correo electronico" type="email" id="mail" />
        
        {/* Telefono */}
        <label id='labelBuyForm'> Telefono/Celular: </label>
        <input className='inputBuyForm' onChange={(e) => setCel(e.target.value)} placeholder="ingrese su celular" type="tel" id="cel" />
      </form>

      {/* Finalizar Compra */}
      <div id='linkContainer'> <button id='finishBuyForm' onClick={() => handleClick()}> Finalizar </button> </div>
    </>)}

    </>)
}

export default BuyMenu