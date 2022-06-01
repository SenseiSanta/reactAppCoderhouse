import React, { useState } from 'react'

export default function ClickTracker( {inicial, maximo} ) {
    const [contador, setContador] = useState(inicial);
    const [fecha, setFecha] = useState( {contador: inicial, fecha: 'Sin fecha'} );


    const handleClick = () => {
        /* if (contador < maximo) {
            setContador(contador + 1)
        } else {
            alert('No puedes sumar')
        }*/
        setContador(contador + 1);
        setFecha({
            contador: contador + 1, fecha
        });
    }

    const handleClickDown = () => {
        /*if (contador > inicial) {
            setContador(contador - 1)
        } else {
            alert('No puedes restar')
        }*/

    }
     

    
  return (<>
    <div>
        <h1> Contador: {contador} </h1>
        <button onClick={handleClick}>
            Sumar
        </button>
        <button onClick={handleClickDown}> 
            Restar
        </button>
    </div>
    <div>
        Dia: {fecha}
    </div>
    </>
  )
}
