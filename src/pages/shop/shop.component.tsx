import React from 'react';
import { Route } from 'react-router';

import CollectionOverview from '../../components/collections-overview/collecions-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollections } from '../../redux/shop/shop.actions';
import { ShopPageProps, CollectionPageProps } from 'shop-component-types';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<ShopPageProps> {
  state = {
    isLoading: true
  }

  unsubscribeFirebase: firebase.Unsubscribe | null = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFirebase = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = converCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribeFirebase){
      this.unsubscribeFirebase();
    }
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )} 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} collection={undefined} {...props} />
          )}
        />
      </div>  
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionMap: {[key: string]: any}) => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
