import cartlogo from './icon.svg'
import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'

const CartWidgetComponent = () => {

    const {setCartModal, cart} = useContext(CartContext)

    const nProductos = cart.reduce((prev, cur) => {
        return prev + cur.quantity
    },0)

    return (
        cart.length !== 0 ?
        <div>
            <img src={cartlogo} className="d-inline-block align-bottom" style={{filter: "invert(99%) sepia(10%) saturate(360%) hue-rotate(60deg) brightness(111%) contrast(100%)"}} width="23" height="23" alt="Carrito" onClick={ ()=> setCartModal(true)}/><span className="text-white">({nProductos})</span>
        </div>
        :
        <>
        </>
    )
}

export default CartWidgetComponent