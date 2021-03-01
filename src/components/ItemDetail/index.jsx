import ItemCountComponent from '../ItemCount'
import { useHistory } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from './../../context/CartContext'

const ItemDetailComponent = ({product}) => {

    const {setCurrentProductID, addProduct, setCartModal} = useContext(CartContext)
    const history = useHistory()

    const [addedToCart, setAddedToCart] = useState(false)
    
    const onAdd = (counterNumber) => {
        console.log(`Se agregaron ${counterNumber} ${product.name} al carrito`)

        addProduct(product.id, product.name, product.price, product.image, product.logo, counterNumber)

        setAddedToCart(true)
    }

    useEffect( () => {
        setCurrentProductID(product.id)
    }, [setCurrentProductID, product.id])


    return (
        <div className="container">
            <div className="card mb-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src={`/images/${product.logo}`} className="card-img-top" alt={product.name} style={{filter:`${product.image}`}}/>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <h6 className="card-subtitle mb-2 text-info">Precio: ${product.price}</h6>
                            <h6 className="card-subtitle mb-2 text-secondary">Stock: {product.stock}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Tutor: {product.seller}</h6>
                            <p className="card-text my-4">{product.description}</p>
                            {addedToCart ? <> <button className="btn btn-primary btn-block mt-3" type="button" onClick={() => setCartModal(true)}>Comprar</button><button className="btn btn-dark btn-block mt-3" type="button" onClick={()=> {history.goBack()}}>Volver</button></> : <ItemCountComponent product={product} onAdd={onAdd} />}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailComponent