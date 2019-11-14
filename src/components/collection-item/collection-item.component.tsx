import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemProps } from 'shop-component-types';
import { Item } from 'shop-component-types';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (        
        <div className='collection-item'>
        <div className='image'
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: Item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);