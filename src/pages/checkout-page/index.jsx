import React from 'react'
import styles from './checkout-page.module.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectItemsCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item'
import { connect } from 'react-redux'

const sectionNames = [ 'Product', 'Description', 'Quantity', 'Price', 'Remove' ]

const HeaderBlock = ({sectionName}) => (
    <div className={styles['header-blocks']}>
        <span>{sectionName}</span>
    </div>  
)


function CheckoutPage({cartItems, totalPrice}) {

    React.useEffect(() => {
        console.log(cartItems, `Total price: ${totalPrice}`)
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
        </div>
    </div>
 
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectItemsCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)