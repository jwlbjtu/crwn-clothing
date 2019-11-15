import React from 'react';

import './cart-item.styles.scss';

import { CartItemProps } from 'cart-component-types';

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => (
    <div className='cart-item'>
        <img className='image' src={item.imageUrl} alt={item.name} />
        <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity} x ${item.price}</span>
        </div>
    </div>
)

export default CartItemComponent;