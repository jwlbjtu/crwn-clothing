import React from 'react';
import { CollectionsOverviewProps } from 'shop-component-types';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { RootState } from 'redux-root-types';
import { selectCollectionPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections?
            collections.map(
                ({id, ...otherCollectionProps}) => 
                    <CollectionPreview key={id} {...otherCollectionProps} />
            ) : null
        }
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, CollectionsOverviewProps> ({
    collections: selectCollectionPreview
});

export default connect(mapStateToProps)(CollectionsOverview);