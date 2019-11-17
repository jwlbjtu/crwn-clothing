import React from 'react';
import { Route, RouteComponentProps } from 'react-router';

import CollectionOverview from '../../components/collections-overview/collecions-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
