import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'redux-root-types';
import { RouterCartDropdownProps} from 'cart-component-types';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItemComponent from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown: React.FC<RouterCartDropdownProps> = ({ cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map((item) => (
                    <CartItemComponent key={item.id} item={item} />
                )) :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton 
            onClick={
                () => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropdown));