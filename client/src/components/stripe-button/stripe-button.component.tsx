import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { StripeCheckoutComponentProps } from 'cart-component-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutCompnent: React.FC<StripeCheckoutComponentProps> = ({ price, clearCart }) => {
    const amount = price * 100;
    const publishKey = "pk_test_66M6PdgzOXmc52ac9oP4Jj4N00nniSJ3Cz";

    const onToken = (token: Token) => {
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                amount,
                token
            }
        }).then(response => {
            alert('Thanks for your payment!');
            clearCart();
        }).catch(error => {
            console.log('There is a payment error: ' + error);
            alert('Sorry, the payment is failed. Please make sure to use the credit card provided.');
        });
    }

    return (
        <StripeCheckout
            label='Pay Now 💳'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={amount}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

const mapDispatcherToProp = (dispatch:any) => ({
    clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatcherToProp)(StripeCheckoutCompnent);
    