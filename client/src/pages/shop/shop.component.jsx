import React, { useEffect, lazy, Suspense } from "react";
// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
// import CollectionPage from "../collection/collection.component";
// import {createStructuredSelector} from 'reselect';
// import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPageContainer from "../collection/collection.container";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const CollectionPageContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);


const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner/>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
