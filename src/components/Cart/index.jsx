import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'
import { Link }from 'react-router-dom'

const CartComponent = () => {

    const {cart, setCart, removeProduct, setCartModal} = useContext(CartContext)

    const totalFinal = cart.reduce((prev, cur) => {
        return prev + (cur.quantity*cur.price)
    },0)

    console.log(cart)

    return (
        cart.length === 0 ?
        <div>
            <div className="sticky-top bg-light">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h2>Su carrito</h2>
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                        <button type="button" className="close" onClick={()=> setCartModal(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <h5 className="mb-5 text-center">Su carrito esta vacio</h5>
                <div className="row justify-content-end">
                    <Link to="/">
                        <button className="btn btn-primary" onClick={()=> setCartModal(false)}>Volver al Home</button>
                    </Link>
                </div>
            </div>
        </div>

        :


        <div>
            <div className="sticky-top bg-light">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h2>Su carrito</h2>
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                        <button type="button" className="close" onClick={()=> setCartModal(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <h5 className="mb-5 text-center">Los productos en su carrito son:</h5>
                {cart.map((product, index) => {
                    return <div className="row border rounded my-4 p-4" key={index}>
                    <div className="col-4">
                        <img src={`/images/${product.logo}`} className="img-fluid" alt={product.name} style={{filter:`${product.image}`}} width="180"/>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <dl className="text-left">
                            <dd className="font-weight-bold">Nombre: {product.name}</dd>
                            <dd>Precio Unitario: ${product.price}</dd>
                            <dd>Cantidad: {product.quantity}</dd>
                        </dl>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <span className="font-italic">Subtotal: ${product.quantity * product.price}</span>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <button type="button" className="close" onClick={()=> {removeProduct(product.id)}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>})}
                <div className="row justify-content-end mb-3">
                    <h4>Total: ${totalFinal}</h4>
                </div>
                <div className="row justify-content-end">
                    <button className="btn btn-secondary mr-1" onClick={() => setCart([])}>Vaciar Carrito</button>
                    <button className="btn btn-primary">Ir a Checkout</button>
                </div>
            </div>
        </div>

    )
}

export default CartComponent