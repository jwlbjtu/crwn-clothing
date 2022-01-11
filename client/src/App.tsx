import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "./global.styles";

import { AppProps } from "app-types";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { checkUserSession } from "./redux/user/user.actions";
import PrivateRoute from "./components/private-route/private-route.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SigninRegisterPage = lazy(
  () => import("./pages/signin-register/signin-register.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App: React.FC<AppProps> = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/signin" element={<PrivateRoute />}>
              <Route element={<SigninRegisterPage />} />
            </Route>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
