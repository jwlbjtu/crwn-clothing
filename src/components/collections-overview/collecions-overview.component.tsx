import React from 'react';
import { CollectionsOverviewProps, Collection } from 'shop-component-types';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { RootState, ShopState } from 'redux-root-types';
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(
                ({id, ...otherCollectionProps}) => 
                    <CollectionPreview key={id} {...otherCollectionProps} />
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, ShopState> ({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);