import React from 'react';
import { RootState } from 'redux-root-types';
import { CollectionPageProps, Item } from 'shop-component-types';  
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import './collection.styles.scss';

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => (
    <div className='collection-page'>
        <h2 className='title'>{collection? collection.title: 'Collection Page'}</h2>
        <div className='items'>
            {
                collection ? 
                collection.items.map(
                    (item: Item) => <CollectionItem key = { item.id } item = { item }/>
                ) : null
            }
        </div>
    </div>
);

const mapStateToProps = (state: RootState, props: CollectionPageProps) => ({
    collection: selectCollection(props.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);