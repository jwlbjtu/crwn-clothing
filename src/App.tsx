import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { AppProps } from 'app-types';
import { RootState } from 'redux-root-types';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninRegisterPage from './pages/signin-register/signin-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component<AppProps, {}> {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render(): JSX.Element {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={(): JSX.Element =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninRegisterPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): { currentUser: any } => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
