import { createStructuredSelector } from "reselect";
import { RootState } from "redux-root-types";
import { selectFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector<RootState, { isLoading: boolean}> ({
    isLoading: selectFetching
});

const CollectionPageContainer = compose<React.ComponentType>(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;