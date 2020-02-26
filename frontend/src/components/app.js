import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_form_container.js";
import Modal from "./modal/modal";
import Nav from "./nav/nav_container";
import CardIndex from './cardsIndex/card_index_container'; //we need to change this


const App = () => (
  <div>
    <Modal />
    <Nav />

    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/minions" component={CardIndex} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
  </div>
);

export default App;
