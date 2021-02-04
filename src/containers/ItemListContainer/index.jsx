import React, { useState, useEffect } from 'react'
import ItemCountComponent from '../../components/ItemCount'
import ItemListComponent from '../../components/ItemList'
import productList from '../../mocks/productList'
import './style.css'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect( () => {

        const loadProductList = new Promise ((resolve, reject) => {
            setTimeout( () => resolve(productList), 2000);
        })
        loadProductList.then((result) => setProducts(result))

    }, [])

    return (
        <>
            <h2>{greeting}</h2>
            <ItemListComponent products={products}/>
        </> 
    )
}

export default ItemListContainer