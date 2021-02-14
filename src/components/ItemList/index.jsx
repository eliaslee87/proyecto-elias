import { Link } from 'react-router-dom'
const ItemListComponent = ({products}) => {

    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">

                {products.map((product, index) => {
                    
                    return <div className="col mb-4" key={index}>

                    <div className="card">
                        <img src={`/images/${product.logo}`} className="card-img-top" alt={product.name} style={{filter:`${product.image}`}}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Precio: ${product.price}</h6>
                            <p className="card-text">{product.description}</p>
                            <Link to={`/item/${product.name}`}>
                            <button className="btn btn-primary btn-block" type="button">Ver Más</button>
                            </Link>
                        </div>
                    </div>

                    </div>

                })}

            </div>
        </div>
)
}

export default ItemListComponent