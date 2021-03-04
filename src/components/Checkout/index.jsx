import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firebase'
import firebase from 'firebase'

const CheckoutComponent = () => {

    const {cart, setCart, removeProduct, totalFinal, setOrderID, buyer, setBuyer} = useContext(CartContext)
    
    const confirmarOrden = () => {

        let newOrder = {
            buyer: buyer,
            items:[...cart],
            date: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
            total: totalFinal}

        const fsDB = getFirestore()
        const OrdersCollection = fsDB.collection("Ordenes")
        OrdersCollection.add(newOrder).then((value)=>{
            setOrderID(value.id)
        })

        setCart([])

    }

    return (
        <>
        <div className="container-fluid">
            <div className="row mx-sm-4">
                <div className="col-12 col-sm-6 mt-3 mt-sm-4">

                    <div className="container px-sm-5">
                        <h4 className="mb-4">Datos del Cliente</h4>
                        <div className="form-group">
                            <label>Nombre y Apellido</label>
                            <input type="text" className="form-control mb-3 text-left" id="customerName" onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
                            <label>E-mail</label>
                            <input type="email" className="form-control mb-3 text-left" id="customerEmail" placeholder="nombre@email.com"onChange={(e) => setBuyer({...buyer, email: e.target.value})} />
                            <label>Direccion de entrega</label>
                            <input type="text" className="form-control mb-3 text-left" id="customerAddress" onChange={(e) => setBuyer({...buyer, address: e.target.value})} />
                            <label>Telefono de contacto</label>
                            <input type="number" className="form-control mb-3 text-left" id="customerPhone" onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
                        </div>
                    </div>

                </div>

                <div className="col-12 col-sm-6 mt-3 mt-sm-4">
                    
                    <div className="container px-sm-5">
                        <h4 className="mb-5">Su listado de productos:</h4>
                        {cart.map((product, index) => {
                        return <div className="row border my-2 py-1" key={index}>
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
                            <h4 className="mt-2">Total: ${totalFinal}</h4>
                        </div>
                    </div>

                </div>
                
                <div className="col-12 my-2">
                    <div className="container-fluid d-flex justify-content-sm-end">
                        <Link to="/confirmacion"><button className="btn btn-primary mr-4" onClick={() => confirmarOrden()}>Confirmar Compra</button></Link>
                        <Link to="/"><button className="btn btn-secondary mr-sm-4">Seguir Comprando</button></Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default CheckoutComponent