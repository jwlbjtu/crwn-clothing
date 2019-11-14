import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartIconProps } from 'cart-component-types';
import { RootState } from 'redux-root-types';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'; 

import './cart-icon.styles.scss';

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, cartItems }) => (
    <div onClick={ toggleCartHidden } className='cart-icon'>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>{cartItems.length}</span>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);