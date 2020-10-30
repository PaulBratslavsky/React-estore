import React from 'react'
import Button from '../button'
import styles from './cart-dropdown.module.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item'
import { selectCartItems,  selectToggleCart} from '../../redux/cart/cart.selectors'
import { toggleCart } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'


function CartDropdown({showCart, cartItems, history, toggleCart }) {
    const handleGoToCheckOut = () => {
        history.push(`/checkout`)
        toggleCart()
    }
    if (showCart) return null
    return <div className={styles['cart-dropdown']}>
        {cartItems.length 
            ? <div className={styles['cart-items']}>
                { cartItems.map(item => <CartItem  key={item.id} {...item} />) }
            </div>
            : <span className={styles['no-items']}>Go choose some items.</span>
        }
        <Button onClick={handleGoToCheckOut}  label="Go to checkout." />
    </div>
}

const mapStateToProps = createStructuredSelector({
    showCart: selectToggleCart,
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps, { toggleCart })(CartDropdown))

