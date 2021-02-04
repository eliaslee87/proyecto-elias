import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import logo from './../../logo.svg'

const ItemCountComponent = ({stock}) => {

    const [totalItem, setTotalItem] = useState(0)
    const [carrito, setCarrito] = useState([])
    const item01 = {nombre: 'item 01', cantidad: 0}
    
    console.log(carrito)

    
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card m-2 contador">
                <img src={logo} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Item 01</h5>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-primary" type="button" onClick={() => {if (totalItem > 0) setTotalItem(totalItem-1)}}>-</button>
                        </div>
                        <input type="number" className="form-control" value={totalItem} onChange={(e) => setTotalItem(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" onClick={() => {if (totalItem < stock) setTotalItem(totalItem+1)}}>+</button>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" type="button" onClick={() => {item01.cantidad=totalItem; setCarrito([item01])}}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )

}

export default ItemCountComponent