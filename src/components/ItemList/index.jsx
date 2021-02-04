import logo from './../../logo2.svg'

const ItemListComponent = ({products}) => {

    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">

                {products.map((product, index) => {

                    return <div className="col mb-4" key={index}>

                    <div className="card">
                        <img src={logo} className="card-img-top" alt={product.name} style={{filter:`${product.image}`}}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Precio: ${product.price}</h6>
                            <p className="card-text">{product.description}</p>
                            <button className="btn btn-primary btn-block" type="button">Comprar</button>
                        </div>
                    </div>

                    </div>

                })}

            </div>
        </div>
)
}

export default ItemListComponent