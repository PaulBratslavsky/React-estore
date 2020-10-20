import React from 'react'
import styles from './cart-icon.module.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'

function CartIcon({count = 0, toggleCart}) {

    return <div className={styles['icon-container']} onClick={toggleCart}>
        <ShoppingIcon />    
        <span className={styles['icon-count']}>{count}</span>
    </div>
}

export default connect(null, {toggleCart})(CartIcon)
