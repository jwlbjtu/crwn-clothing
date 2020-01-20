import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ShopPageProps } from 'shop-component-types';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage : React.FC<ShopPageProps> = ({ fetchCollectionsStart, match }) => {
  
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={Spinner} >
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>  
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
