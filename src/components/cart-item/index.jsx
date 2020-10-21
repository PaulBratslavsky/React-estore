import React from 'react'
import styles from './cart-item.module.scss'

export default function CartItem({imageUrl, price, name, quantity}) {
    return <div className={styles['cart-item']}>
        <img src={imageUrl} alt={name} />
        <div className={styles['item-details']}>
            <span className={styles['name']}>{name}</span>
            <span className={styles['price']}>{quantity} X ${price}</span>
        </div>
    </div>
}