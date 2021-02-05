import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
const ItemCountComponent = ({product}) => {

    const [totalItem, setTotalItem] = useState(0)

    return (    
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-primary" type="button" onClick={() => {if (totalItem > 0) setTotalItem(totalItem-1)}}>-</button>
            </div>
            <input type="number" className="form-control" value={totalItem} min="0" max={product.stock} onChange={(e) => setTotalItem(e.target.value)} />
            <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button" onClick={() => {if (totalItem < product.stock) setTotalItem(totalItem+1)}}>+</button>
            </div>
        </div>
    )

}

export default ItemCountComponent