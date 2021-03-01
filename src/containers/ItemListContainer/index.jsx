import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ItemListComponent from '../../components/ItemList'
import { getFirestore } from '../../firebase'
import './style.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setIsloading] = useState(false)

    const {catId} = useParams()

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

            const filterProductList = database.filter((e) => e.categoryID === catId)
            const result = (filterProductList.length === 0) ? database : filterProductList

            setProducts(result)
            setIsloading(false)
        })

    }, [catId])

    return (
        <>
        <h2>Bienvenidos a la tienda ReactJS</h2>
            <ul className="nav nav-pills justify-content-center mb-4">
                <li className="nav-item">
                    <NavLink to='/categoria/bootstrap' className="nav-link text-dark" activeClassName="active bg-warning">Bootstrap</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/categoria/html5' className="nav-link text-dark" activeClassName="active bg-warning">HTML5</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/categoria/reactjs' className="nav-link text-dark" activeClassName="active bg-warning">ReactJS</NavLink>
                </li>
            </ul>
            {loading ? <img src="/images/loading.gif" className="mt-5 mx-auto d-block" alt="loading"/> : <ItemListComponent products={products}/>}
        </>
    )
}

export default ItemListContainer