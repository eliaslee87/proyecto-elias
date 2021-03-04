import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'
import { Link } from 'react-router-dom'

const OrderConfirmationComponent = () => {

    const { orderID, buyer} = useContext(CartContext)


    return (
        <div className="container">
            <div className="row mt-sm-4">
                <div className="col-12 my-4 text-center">
                    <h3 className="mb-4">¡Su orden fue confirmada!</h3>
                    <p className="lead mb-4">{buyer.name}, ¡Muchas gracias por elegirnos!<br/>Su orden fue confirmada satisfactoriamente y hemos enviado el mail de confirmacion a {buyer.email}.<br/><br/>El codigo de su orden es el:</p>
                    <h3 className="mb-4 text-primary">{orderID}</h3>
                </div>

                <div className="col-12 text-center">
                        <Link to="/"><button className="btn btn-secondary mr-sm-4">Volver al Home</button></Link>
                </div>

            </div>
        </div>
    )
}

export default OrderConfirmationComponent