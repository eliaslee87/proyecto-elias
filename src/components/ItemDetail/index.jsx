import ItemCountComponent from '../ItemCount'
import { Link } from 'react-router-dom'

const ItemDetailComponent = ({product}) => {

    const onAdd = (contador) => {
        console.log(`Se agregaron ${contador} unidades`)
    }

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
                            <ItemCountComponent product={product} onAdd={onAdd}/>
                            <Link to="/cart">
                                <button className="btn btn-primary btn-block" type="button">Comprar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailComponent