import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'

const CartComponent = () => {

    const {cart, removeProduct, emptyCart} = useContext(CartContext)
    
    console.log(cart)

    return (
        <div className="mb-5">
            <h2>Su Carrito</h2>
            <div className="container">
                <h5 className="mb-5 text-center">Los productos en su carrito son:</h5>
                    
                <div className="row row-cols-1 row-cols-md2 row-cols-lg-4">
                {cart.map((product, index) => {
                    return <div className="col-12 mb-4" key={index}>
                        <img src={`/images/${product.logo}`} className="img-fluid" alt={product.name} style={{filter:`${product.image}`}} width="180"/>
                        <dl>
                        <dt className="mb-3">
                            Nombre: {product.name}
                        </dt>
                        <dd>
                            Precio Unitario: ${product.price}
                        </dd>
                        <dd>
                            Cantidad: {product.quantity}
                        </dd>
                        </dl>
                        <button className="btn btn-danger" onClick={()=> {removeProduct(product.id)}}>Quitar</button>
                        </div>
                })}
                </div>
                
                <button className="btn btn-secondary mt-5" onClick={emptyCart}>Vaciar Carrito</button>
            </div>
            
        </div>
    )
}

export default CartComponent