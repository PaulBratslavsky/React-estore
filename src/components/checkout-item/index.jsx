import React from 'react'
import styles from './checkout-item.module.scss'
import { connect } from 'react-redux'
import { clearCart, addItem, removeItem } from '../../redux/cart/cart.actions'

function CheckoutItem({item, clearCart, addItem, removeItem}) {
    const { name,imageUrl,quantity,price } = item;
    return <div className={styles['checkout-item']}>
        <div className={styles['image-container']}>
            <img src={imageUrl} alt={name} />
        </div>
        <span className={styles['name']}>{name}</span>
        <span className={styles['quantity']}>
            <div className={styles['arrow']} onClick={() => removeItem(item)}>&#10094;</div>
                {quantity}
            <div className={styles['arrow']} onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className={styles['price']} onClick={() => clearCart(item)}>{price}</span>
        <div className={styles['remove-button']} onClick={() => clearCart(item)}>
        &#10005;
        </div>
    </div>
}

export default connect(null, { clearCart, addItem, removeItem })(CheckoutItem);