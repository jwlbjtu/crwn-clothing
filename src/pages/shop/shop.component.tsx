import React from 'react';
import { Route } from 'react-router';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { ShopPageProps } from 'shop-component-types';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component<ShopPageProps> {

  componentDidMount() {
    this.props.fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </div>  
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
