import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartModal, setCartModal] = useState(false)

    const totalProductos = cart.reduce((prev, cur) => prev + cur.quantity
    ,0)

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

    /*-- Para el Cart y Checkout --*/
    const totalFinal = cart.reduce((prev, cur) => {
        return prev + (cur.quantity*cur.price)
    },0)

    /*-- Para el Checkout --*/
    const [orderID, setOrderID] = useState()
    const [buyer, setBuyer] = useState({name: "", email: "", address: "",phone: ""})

    /*-- Local Storage GET ITEM --*/
    useEffect( () => {
        if(localStorage.getItem('cart') !== null){
            setCart(JSON.parse(localStorage.getItem('cart')))
            console.log(localStorage.getItem('cart'))
        }
    },[])
    /*-- Local Storage SET ITEM --*/
    useEffect( () => {
        localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart])


    return <CartContext.Provider value={{cart, setCart, currentProductID, setCurrentProductID, productExists, addProduct, removeProduct, cartModal, setCartModal, totalProductos, totalFinal, orderID, setOrderID, buyer, setBuyer}}>
        {children}
    </CartContext.Provider>

}