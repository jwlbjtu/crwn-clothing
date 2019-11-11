import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninRegisterPage from './pages/signin-register/signin-register.component';
import Hats from './pages/hats.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
 
class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFirebaseAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFirebaseAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: user });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninRegisterPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
