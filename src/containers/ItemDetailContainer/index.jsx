import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../../components/ItemDetail'
import productList from '../../mocks/productList'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {itemId} = useParams()

    useEffect( () => {
        
        const loadProductList = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 200);
        })
        
        loadProductList.then((database) => {
            
            const selectedProduct = database.find((e) => e.name === itemId)
            setProduct(selectedProduct)
        
        })

    }, [itemId])

    return (
        <>
            <h2>Detalle del Producto</h2>
            <ItemDetailComponent product={product} />
        </>
    )
}

export default ItemDetailContainer