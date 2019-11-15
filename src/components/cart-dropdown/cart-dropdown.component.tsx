import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'redux-root-types';
import { CartDropDownProps} from 'cart-component-types';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItemComponent from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';


const CartDropdown: React.FC<CartDropDownProps> = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((item) => (
                    <CartItemComponent key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);