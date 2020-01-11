import CollectionsOverview from './collecions-overview.component';
import { createStructuredSelector } from 'reselect';
import { selectFetching } from '../../redux/shop/shop.selector';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import { RootState } from 'redux-root-types';

const mapStateToProps = createStructuredSelector<RootState, { isLoading: boolean }>({
    isLoading: selectFetching
})

const CollectionOverviewContainer = compose<React.ComponentType>(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;