import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

import { AppProps } from 'app-types';
import { RootState } from 'redux-root-types';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninRegisterPage from './pages/signin-register/signin-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument, addCollectionsToFirebase } from './firebase/firebase.util';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionPreview } from './redux/shop/shop.selector';

class App extends React.Component<AppProps, {}> {
  unsubscribeFirebaseAuth: firebase.Unsubscribe | null = null;

  componentDidMount(): void {
    const { setCurrentUser, collections } = this.props;
    this.unsubscribeFirebaseAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(user);
      addCollectionsToFirebase('collections', collections.map(({ title, items }) => ({ title, items })));
    });
  }

  componentWillUnmount(): void {
    if (this.unsubscribeFirebaseAuth) {
      this.unsubscribeFirebaseAuth();
    }
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

const mapStateToProps = (state: RootState): { currentUser: any, collections: Array<any> } => ({
  currentUser: selectCurrentUser(state),
  collections: selectCollectionPreview(state)
});

const mapDispachToProps = (
  dispatch: any
): { setCurrentUser: (user: any) => any } => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispachToProps)(App);
