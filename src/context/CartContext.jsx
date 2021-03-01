import { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartModal, setCartModal] = useState(false)
<<<<<<< HEAD

    const totalProductos = cart.reduce((prev, cur) => prev + cur.quantity
    ,0)
=======
>>>>>>> 945e050e2e688d7e30a0725e4e01293a55642d81
    
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

    
<<<<<<< HEAD
    return <CartContext.Provider value={{cart, setCart, currentProductID, setCurrentProductID, productExists, addProduct, removeProduct, cartModal, setCartModal, totalProductos}}>
=======
    return <CartContext.Provider value={{cart, setCart, currentProductID, setCurrentProductID, productExists, addProduct, removeProduct, cartModal, setCartModal}}>
>>>>>>> 945e050e2e688d7e30a0725e4e01293a55642d81
        {children}
    </CartContext.Provider>

}