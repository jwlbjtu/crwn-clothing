import React from 'react';

import SHOP_DATA from './shop.data';

import { ShopPageState } from 'shop-component-types';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component<{}, ShopPageState> {
    state = {
        collections: SHOP_DATA
    }

    render() {
        const {collections} = this.state;
        return (
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        );
    }
}

export default ShopPage;

