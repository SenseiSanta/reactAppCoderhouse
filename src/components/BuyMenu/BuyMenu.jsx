import React from 'react'
import { useState } from 'react'
import '../BuyMenu/BuyMenu.css'

function BuyMenu() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState('');

  function handleClick(){
    console.log(name, email, cel)
  }
  
  return (<>
    
    <h1 id='buyMenuTitle'> Para finalizar su compra, por favor, complete el siguiente formulario</h1>
    
    <form id='form'>
      
      {/* Nombre */}
      <label> Nombre: </label>
      <input onChange={(e) => setName(e.target.value)} placeholder="ingrese su nombre" type="text" id="name" name="userName" />
      
      {/* Mail */}
      <label> Correo electrónico: </label>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="ingrese su correo electronico" type="email" id="mail" name="userMail" />
      
      {/* Telefono */}
      <label> Telefono/Celular: </label>
      <input onChange={(e) => setCel(e.target.value)} placeholder="ingrese su celular" type="number" id="cel" name="userCel" />

      {/* Finalizar Compra */}
      <button type='submit' onClick={() => handleClick()}> Finalizar </button>
    </form>
    </>
  )
}

export default BuyMenu