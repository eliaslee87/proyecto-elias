import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ItemListComponent from '../../components/ItemList'
import productList from '../../mocks/productList'
import './style.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    useEffect( () => {

        const loadProductList = new Promise ((resolve, reject) => { 
            setTimeout(() => {
                resolve(productList)
            }, 500);
        })

        loadProductList.then((database) => {

            const filterProductList = database.filter((e)=> e.category === categoryId)
            const result = (filterProductList.length === 0) ? database : filterProductList

            setProducts(result)
        })

    }, [categoryId])

    return (
        <>
            <h2>Bienvenidos a la tienda ReactJS</h2>
            <ul className="nav nav-pills justify-content-center mb-4">
                <li className="nav-item">
                    <NavLink to='/categoria/reactjs' className="nav-link text-dark" activeClassName="active bg-warning">ReactJS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/categoria/bootstrap' className="nav-link text-dark" activeClassName="active bg-warning">Bootstrap</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/categoria/html5' className="nav-link text-dark" activeClassName="active bg-warning">HTML5</NavLink>
                </li>
            </ul>
            
            <ItemListComponent products={products}/>
        </> 
    )
    
}

export default ItemListContainer