import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'
import { Link } from 'react-router-dom'

const CartComponent = () => {

    const {cart, setCart, removeProduct, setCartModal, totalFinal} = useContext(CartContext)

    return (
        cart.length === 0 ? /* Corregir ternario para que cambie solo la segunda parte y no el sticky-top*/
        <div>
            <div className="sticky-top bg-light">
                <div className="row">
                    <div className="col-3 col-sm-1"></div>
                    <div className="col-6 col-sm-10">
                        <h2>Su carrito</h2>
                    </div>
                    <div className="col-3 col-sm-1 d-flex align-items-center justify-content-center">
                        <button type="button" className="close" onClick={()=> setCartModal(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <h5 className="mb-5 text-center">Su carrito esta vacio</h5>
                <div className="row justify-content-center justify-content-sm-end">
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
                <div className="col-3 col-sm-1"></div>
                <div className="col-6 col-sm-10">
                        <h2>Su carrito</h2>
                    </div>
                    <div className="col-3 col-sm-1 d-flex align-items-center justify-content-center">
                        <button type="button" className="close" onClick={()=> setCartModal(false)}>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container p-4 p-sm-5">
                <h5 className="mb-5 text-center">Los productos en su carrito son:</h5>
                {cart.map((product, index) => {
                    return <div className="row border rounded my-2 py-1 my-sm-4 p-sm-4" key={index}>
                    <div className="col-12 col-sm-3 text-center">
                        <img src={`/images/${product.logo}`} className="img-fluid" alt={product.name} style={{filter:`${product.image}`}} width="180"/>
                    </div>
                    <div className="col-12 col-sm-4 d-flex align-items-end justify-content-center">
                        <dl className="text-center text-sm-left">
                            <dd className="font-weight-bold">Nombre: {product.name}</dd>
                            <dd>Precio Unitario: ${product.price}</dd>
                            <dd>Cantidad: {product.quantity}</dd>
                        </dl>
                    </div>
                    <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center mb-2">
                        <span className="font-italic">Subtotal: ${product.quantity * product.price}</span>
                    </div>
                    <div className="col-12 col-sm-1 d-flex align-items-center justify-content-end mb-2">
                        <button type="button" className="close" onClick={()=> {removeProduct(product.id)}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>})}
                <div className="row justify-content-center justify-content-sm-end my-4 my-sm-3">
                    <h4>Total: ${totalFinal}</h4>
                </div>
                <div className="row my-2 justify-content-center justify-content-sm-end">
                    <button className="btn btn-secondary mr-1" onClick={() => setCart([])}>Vaciar Carrito</button>
                    <Link to="/checkout"><button className="btn btn-primary" onClick={() => {setCartModal(false)}}>Ir a Checkout</button></Link>
                </div>
            </div>
        </div>

    )
}

export default CartComponent