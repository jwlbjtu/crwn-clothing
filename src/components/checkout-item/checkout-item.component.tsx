import React from 'react';

import './checkout-item.styles.scss';
import { CheckoutItemProps } from 'cart-component-types';
import { connect } from 'react-redux';
import { CartItem, Item } from 'shop-component-types';
import { removeItem, clearItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem, addItem, removeItem, clearItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt={cartItem.name}/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => addItem({
                id: cartItem.id,
                name: cartItem.name,
                price: cartItem.price,
                imageUrl: cartItem.imageUrl
            })}>&#10095;</div>
        </span>
        <span className='price'>${cartItem.price}</span>
        <div className='remove-button' onClick={ () => clearItem(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: Item) => dispatch(addItem(item)),
    removeItem: (cartItem: CartItem) => dispatch(removeItem(cartItem)),
    clearItem: (cartItem: CartItem) => dispatch(clearItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);