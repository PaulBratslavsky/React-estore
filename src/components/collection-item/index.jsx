import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './collection-item.module.scss'
import { addItem } from '../../redux/cart/cart.actions'

function CollectionItem({item, cartItems, addItem}) {
    const [ itemsCount, setItemsCount ] = useState(0)

    useEffect(() => {
        cartItems.map(selected => (selected.id === item.id && setItemsCount(selected.quantity))) 
    }, [cartItems, item])

    return <div className={styles['collection-item']} onClick={() => addItem(item) }>
        <div className={styles['image']} style={{backgroundImage: `url(${item.imageUrl})`}} />
        <div className={styles['collection-footer']}>
            <span className={styles['name']}>{item.name}</span>
            <span className={styles['price']}>${item.price}</span>
        </div>
        <span className={styles['add-icon']}>{itemsCount === 0 ? '+' : itemsCount}</span>
    </div>
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps, { addItem })(CollectionItem)
