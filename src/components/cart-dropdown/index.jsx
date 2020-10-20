import React from 'react'
import Button from '../button'
import styles from './cart-dropdown.module.scss'
import { connect } from 'react-redux'

function CartDropdown({showCart}) {
    if (showCart) return null
    return <div className={styles['cart-dropdown']}>
        <div className={styles['cart-items']}></div>
        <Button onClick={() => alert('click')} label="Go to checkout." />
    </div>
}

const mapStateToProps = (state) => ({
    showCart: state.cart.hidden,
})

export default connect(mapStateToProps)(CartDropdown)

