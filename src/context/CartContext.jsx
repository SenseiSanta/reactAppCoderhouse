import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import swal from 'sweetalert'

export const CartContext = createContext();

const {Provider} = CartContext;

const MyProvider = ({children}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('items')) ?? []);

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(cart))
    }, [cart])
    
    // Detecta si el item seleccionado ya esta en el carrito. Devuelve boolean
    const IsInCart = (id) => {
        return cart.some(x => x.id === id);
    } 

    // Agrega la cantidad seleccionada al carrito sin pisar los que estan y sumando la cantidad ya establecida
    const addItem = (item, quantity) => {
        
        const newItem = {
            ...item,
            quantity
        }

        if (IsInCart(newItem.id)) {
                
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];

            auxArray[productIndex].quantity += quantity
            setCart(auxArray)

        } else  {
            setCart([...cart, newItem])
        }
    }

    // Reinicia el carrito
    const resetCart = () => {
        swal({
            text: 'Estas seguro que quieres reiniciar el carrito?',
            buttons: {
                Yes:{
                    text: 'Si',
                    value: true,
                },
                No:{
                    text: 'No',
                    value: false,
                }
            }
          }).then((value) => {if (value) {
            setCart([]);
            swal({
                text: 'Carrito reseteado',
                icon: 'success'
            })
          }})
    }

    // Vacia el carrito
    const emptyCart = () => {
        setCart([])
    }

    // Retorna un nuevo array sin el item seleccionado a eliminar
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    // Retorna la cantidad de unidades que tiene nuestro carrito
    const GetItemQty = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }

    // Retorna el valor total del carrito
    const GetItemPrice = (item) => {
        return item.quantity * item.price;
    }

    // Retorna el valor total del carrito
    const GetCartPrice = () => {
        return cart.reduce((acc, x) => acc += x.quantity * x.price, 0)
    }

        return <Provider value={{cart, IsInCart, addItem, deleteItem, emptyCart, GetItemQty, GetItemPrice, GetCartPrice, resetCart}}> {children} </Provider>
    }

export default MyProvider;