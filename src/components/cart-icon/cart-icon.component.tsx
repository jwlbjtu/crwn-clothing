import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartIconProps } from 'cart-component-types';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'; 

import './cart-icon.styles.scss';

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => (
    <div onClick={ toggleCartHidden } className='cart-icon'>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);