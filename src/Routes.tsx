import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import Main from "pages/Main";
import SignIn from "pages/SignIn";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
