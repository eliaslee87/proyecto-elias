import React, { useState, useEffect} from 'react'
import ItemDetailComponent from '../../components/ItemDetail'
import productDetail from '../../mocks/productDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    useEffect( () => {
        
        const loadProductDetail = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(productDetail), 2000);
        })
        loadProductDetail.then((result) => setProduct(result))

    }, [])

    return (
        <>
            <h2>Detalle del Producto</h2>
            <ItemDetailComponent product={product}/>
        </>
    )
}

export default ItemDetailContainer