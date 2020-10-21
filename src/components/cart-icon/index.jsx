import React from 'react'
import styles from './cart-icon.module.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'
import { selectItemsCartCount } from '../../redux/cart/cart.selectors.js'

function CartIcon({itemsCount, toggleCart}) {

    return <div className={styles['icon-container']} onClick={toggleCart}>
        <ShoppingIcon />    
        <span className={styles['icon-count']}>{itemsCount}</span>
    </div>
}

const mapStateToProps = (state) => ({
    itemsCount: selectItemsCartCount(state)
})

export default connect(mapStateToProps, {toggleCart})(CartIcon)
