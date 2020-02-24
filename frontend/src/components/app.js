import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
  </div>
);

export default App;
