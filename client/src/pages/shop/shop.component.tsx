import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { ShopPageProps } from "shop-component-types";
import { connect } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(
  () =>
    import(
      "../../components/collections-overview/collections-overview.container"
    )
);
const CollectionPageContainer = lazy(
  () => import("../collection/collection.container")
);

const ShopPage: React.FC<ShopPageProps> = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path=":collectionId" element={<CollectionPageContainer />} />
          <Route path="*" element={<CollectionOverviewContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
