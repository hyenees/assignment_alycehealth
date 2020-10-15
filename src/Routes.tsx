import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import Main from "Main";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
