import React from 'react'
import styles from './checkout-page.module.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectItemsCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item'
import { connect } from 'react-redux'
// import StripeButton from '../../components/stripe-button'

import AuthenticatedUser from '../../components/authenticated-user'
const withAuth = AuthenticatedUser(CheckoutPage)

const sectionNames = [ 'Product', 'Description', 'Quantity', 'Price', 'Remove' ]

const HeaderBlock = ({sectionName}) => (
    <div className={styles['header-blocks']}>
        <span>{sectionName}</span>
    </div>  
)


function CheckoutPage({cartItems, totalPrice}) {

    React.useEffect(() => {
    }, [cartItems, totalPrice])

    return <div className={styles['checkout-page']}>
        <header className={styles['checkout-header']}>
            { sectionNames.map((section, index) => <HeaderBlock key={index} sectionName={section} />)}
        </header>
        {
            cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
        }
        <div className={styles['total']}>
            <span>TOTAL: ${totalPrice.toFixed(2)} </span> 
            {/* { cartItems.length !== 0 && <StripeButton label="Check Out" price={totalPrice.toFixed(2)} />  }  */}
        </div>
        {/* <div className={styles['warning']}>
            <p>Please use the following test credit card information</p>
            <p>CreditCard: 4242 4242 4242 4242</p>
            <p><span>Exp: 01/21</span>{' '}<span>Code: 123</span></p>
        </div> */}
    </div>
 
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectItemsCartTotal
})

export default connect(mapStateToProps)(withAuth)