import React from 'react'
import ProductList from '../../../../components/lists/productList/ProductList'
import classes from './ProductsList.module.css'

const ProductsList = () => {
    return (
        <div className={classes.container}>
            <ProductList />
        </div>
    )
}

export default ProductsList
