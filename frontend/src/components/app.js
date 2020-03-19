import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_form_container.js";
import Modal from "./modal/modal";
import Nav from "./nav/nav_container";
import CardIndex from './cardsIndex/card_index_container'; //we need to change this
import UserProfile from './users/user_profile_container';
import HowToPlay from './how_to_play/how_to_play';
import AboutUs from './about_us/about_us';
import Versus from "./users/versus";

const App = () => (
  <div>
    <Modal />
    <Nav />

    <Switch>
      <Route exact path="/about" component={AboutUs} />
      <Route exact path='/learn' component={HowToPlay}/>
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/minions" component={CardIndex} />
      <Route exact path="/users/:user_id" component={UserProfile} />
      <Route exact path="/users/:user_id/vs/:user_id2" component={Versus} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
