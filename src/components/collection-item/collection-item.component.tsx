import React from 'react';

import { CollectionItemProps } from 'collection-item-component-types';

import './collection-item.styles.scss';

const CollectionItem: React.FC<CollectionItemProps> = ({name, imageUrl, price}) => (
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
    </div>
)

export default CollectionItem;