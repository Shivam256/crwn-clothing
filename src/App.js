import React,{useEffect} from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from './pages/checkout/checkout.component';

import Header from "./components/header/header.component";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import {selectCurrentUser} from './redux/user/user.selectors';
// import { setCurrentUser } from "./redux/user/user.actions";
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions';


const App = ({checkUserSession,currentUser}) => {
  // unsubscribeFromAuth = null;

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
