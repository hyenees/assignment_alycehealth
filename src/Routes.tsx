import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import Main from "pages/Main";
import SignIn from "pages/SignIn";
import Bookmark from "pages/Bookmark";
import EditArticle from "pages/EditArticle";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/bookmark" component={Bookmark} />
        <Route path="/edit" component={EditArticle} />
      </Switch>
    </Router>
  );
};

export default Routes;
