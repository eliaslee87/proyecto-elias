import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../../components/ItemDetail'
import { getFirestore } from '../../firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setIsloading] = useState(false)

    const {itemId} = useParams()

    useEffect( () => {
        setIsloading(true)
        const fsDB = getFirestore()
        const productList = fsDB.collection("Items")
    
        const loadProductList = new Promise ((resolve, reject) => {

            resolve(productList.get().then((value) => {
                let aux = value.docs.map(e => {
                    return {...e.data(), id: e.id}
                })
                return aux.sort((a,b) => {if (a.name < b.name){return -1}; if (a.name > b.name){return 1}; return 0})
            }))
        })
        
        loadProductList.then((database) => {
            
            const selectedProduct = database.find((e) => e.name === itemId)
            setProduct(selectedProduct)
            setIsloading(false)
        })

    }, [itemId])


    return (
        <>
            <h2>Detalle del Producto</h2>
            {loading ? <img src="/images/loading.gif" className="mt-5 mx-auto d-block" alt="loading"/> : <ItemDetailComponent product={product} />}
        </>

    )

}

export default ItemDetailContainer