import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'redux-root-types';
import { CartDropDownProps} from 'cart-component-types';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown: React.FC<CartDropDownProps> = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems
});


export default connect(mapStateToProps)(CartDropdown);