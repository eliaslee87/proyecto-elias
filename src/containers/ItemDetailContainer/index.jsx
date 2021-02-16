import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../../components/ItemDetail'
import productList from '../../mocks/productList'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setIsloading] = useState(false)

    const {itemId} = useParams()

    useEffect( () => {
        setIsloading(true)
        const loadProductList = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 500);
        })
        
        loadProductList.then((database) => {
            
            const selectedProduct = database.find((e) => e.name === itemId)
            setProduct(selectedProduct)
            setIsloading(false)
        })

    }, [itemId])

    if (loading) {
        return (
            <>
                <h2>Detalle del Producto</h2>
                <img src="/images/loading.gif" className="mt-5 mx-auto d-block" alt="loading"/>
            </>
        )
    }

    return (
        <>
            <h2>Detalle del Producto</h2>
            <ItemDetailComponent product={product} />
        </>
    )
}

export default ItemDetailContainer