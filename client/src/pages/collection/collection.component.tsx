import React from "react";
import { RootState } from "redux-root-types";
import { CollectionPageProps, Item } from "shop-component-types";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import "./collection.styles.scss";
import withRouter from "../../components/with-router/with-router";

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">
        {collection ? collection.title : "Collection Page"}
      </h2>
      <div className="items">
        {collection
          ? collection.items.map((item: Item) => (
              <CollectionItem key={item.id} item={item} />
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState, props: CollectionPageProps) => ({
  collection: selectCollection(props.router.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
