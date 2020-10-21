import React from 'react'
import Button from '../button'
import styles from './cart-dropdown.module.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item'
import { selectCartItems,  selectToggleCart} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'


function CartDropdown({showCart, cartItems}) {
    console.log(cartItems, "from menu")
    if (showCart) return null
    return <div className={styles['cart-dropdown']}>
        <div className={styles['cart-items']}>
            { cartItems.map(item => <CartItem  key={item.id} {...item} />) }
        </div>
        <Button onClick={() => alert('click')} label="Go to checkout." />
    </div>
}

const mapStateToProps = createStructuredSelector({
    showCart: selectToggleCart,
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)

