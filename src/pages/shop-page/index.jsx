import React from 'react'
import styles from './shop-page.module.scss'
import PreviewCollection from '../../components/collection-preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProductToArray } from '../../redux/products/products.selector'

function ShopPage({products = []}){
        return <div className={styles['shop-page']}>
            { products.map((item) => 
                <PreviewCollection key={item.id} {...item} />) 
            }
        </div> 
}

const mapStateToProps = createStructuredSelector({
    products: selectProductToArray
})
export default connect(mapStateToProps)(ShopPage)
