import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { AppProps } from 'app-types';
import { RootState } from 'redux-user-types';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninRegisterPage from './pages/signin-register/signin-register.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
 
class App extends React.Component<AppProps, {}> {
  unsubscribeFirebaseAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFirebaseAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    if(this.unsubscribeFirebaseAuth) {
      this.unsubscribeFirebaseAuth();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
                  render={
                    () => this.props.currentUser?
                          (<Redirect to='/' />):
                          (<SigninRegisterPage />)              
                  } 
          />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser
});

const mapDispachToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispachToProps)(App);
