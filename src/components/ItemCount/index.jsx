import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
const ItemCountComponent = ({product}, {onAdd}) => {

    const [counterNumber, setCounterNumber] = useState(1)
    const itemStock = product.stock
    
    const removeItem = () => {
        if (counterNumber > 1) {setCounterNumber(counterNumber-1)}
    }
    const addItem = () => {
        if (counterNumber < itemStock) {setCounterNumber(counterNumber+1)}
    }

    const manualCounterInput = (e) => {
        if (e.target.value > itemStock) {
            alert(`El stock actual del producto es de ${itemStock} productos. Por favor modifique la cantidad de productos a agregar.`)
        } else if (e.target.value < 1) {
            alert('No puedes agregar menos de 1 producto. Por favor modifique la cantidad de productos a agregar.')
        } else {
            setCounterNumber(e.target.value)
        }
    }


    return (    
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-primary" type="button" onClick={removeItem}>-</button>
            </div>
            <input type="number" className="form-control" value={counterNumber} onChange={manualCounterInput}/>
            <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button" onClick={addItem}>+</button>
            </div>
        </div>
    )

}

export default ItemCountComponent