import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import { clearAll } from '../../redux/cart/cart.actions';

function StripeButton({label, price, clearAll}) {
    const priceInCents = parseInt(price * 100, 10)
    const publishKey = 'pk_test_51HjpyaLHTllRk3AVx3K2IEhGWafliTFr5o8YxsRBpMmfYAJG51qnL1WTEhAyb5aOY2vf30GvDC16dahQKkwRo1TB00mIfLSGAs'
    
    function onToken(token) {
        alert('Payment Successful')
        clearAll();
    }
    
    return <div className="stripe-button">
        <StripeCheckout 
            label={label} 
            name="My Shop"
            billingAddress 
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishKey}
        />     
    </div>
}

export default connect(null, {clearAll})(StripeButton)