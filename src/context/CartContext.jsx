import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const {Provider} = CartContext;

const MyProvider = ({children}) => {

    const [cart, setCart] = useState([]);

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

    // Vacia el carrito
    const emptyCart = () => {
        setCart([]);
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

        return <Provider value={{cart, IsInCart, addItem, deleteItem, emptyCart, GetItemQty, GetItemPrice, GetCartPrice}}> {children} </Provider>
    }

export default MyProvider;