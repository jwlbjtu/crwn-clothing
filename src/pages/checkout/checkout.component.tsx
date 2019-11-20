import React from 'react';
import { CheckoutPageProps } from 'cart-component-types';
import { connect } from 'react-redux';
import { RootState } from 'redux-root-types';
import {
  selectCartItems,
  selectCartItemsTotal
} from '../../redux/cart/cart.selector';

import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutComponent from '../../components/stripe-button/stripe-button.component';

const CheckOutPage: React.FC<CheckoutPageProps> = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutComponent price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, CheckoutPageProps>({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckOutPage);
