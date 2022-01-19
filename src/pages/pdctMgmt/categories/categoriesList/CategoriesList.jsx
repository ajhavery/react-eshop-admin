import React from 'react'
import classes from './CategoriesList.module.css'
import CategoryList from "../../../../components/lists/categoryList/CategoryList"

const CategoriesList = () => {
    return (
        <div className={classes.container}>
            <CategoryList />
        </div>
    )
}

export default CategoriesList
