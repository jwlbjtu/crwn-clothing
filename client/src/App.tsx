import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';

import { AppProps } from 'app-types';
import { RootState } from 'redux-root-types';

import Header from './components/header/header.component';
import Spinner from '../src/components/spinner/spinner.component';
import ErrorBoundary from '../src/components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SigninRegisterPage = lazy(() => import('./pages/signin-register/signin-register.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component')); 

const App : React.FC<AppProps> = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle　/>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={Spinner}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={(): JSX.Element =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SigninRegisterPage />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = (state: RootState): { currentUser: any } => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
