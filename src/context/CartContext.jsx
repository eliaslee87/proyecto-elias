import { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [currentProductID, setCurrentProductID] = useState()

    const productExists = cart.find(e => e.id === currentProductID) ? true : false

    const addProduct = (id, name, price, image, logo, quantity) => {
        (productExists === false) ?
            setCart([...cart, {id: id, name: name, price: price, logo: logo, image: image, quantity: quantity}])
            :
            cart.forEach( product => {
                if (product.id === currentProductID) {
                    product.quantity = product.quantity + quantity
                }
            })
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    const emptyCart = () => setCart([])

    

    return <CartContext.Provider value={{cart, setCart, currentProductID, setCurrentProductID, productExists, addProduct, removeProduct, emptyCart}}>
        {children}
    </CartContext.Provider>

}