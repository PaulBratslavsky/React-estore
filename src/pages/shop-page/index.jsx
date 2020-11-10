import React from 'react'
import styles from './shop-page.module.scss'
import PreviewCollection from '../../components/collection-preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProductToArray } from '../../redux/products/products.selector'
import WithSpinner from '../../components/with-spinner'

function ShopPage({products, isFetching}){
        if (isFetching) return <WithSpinner />
        return <div className={styles['shop-page']}>
            { products.map((item) => {
                return <PreviewCollection key={item.id} {...item} />
            }) 
            }
        </div> 
}

const mapStateToProps = createStructuredSelector({
    products: selectProductToArray
})
export default connect(mapStateToProps)(ShopPage)
