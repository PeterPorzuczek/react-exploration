import React from "react";
import createHashHistory from "history/createHashHistory";
import { Router, Route, Switch } from "react-router-dom";
import { ModalContainer, ModalRoute } from "react-router-modal";
import Main from "../../app/layouts/Main";
import Home from "../../app/pages/Home";
import About from "../../app/pages/About";
import BeerModal from "../../app/containers/Beer";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const AppRoute = ({ page: Page, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Page {...props} />
      </Layout>
    )}
  />
);

const createRoutes = () => (
  <Router history={hashHistory}>
    <div>
      <Switch>
        <AppRoute exact path="/about" layout={Main} page={About} />
        <AppRoute path="/" layout={Main} page={Home} />
      </Switch>
      <ModalRoute
        exact
        path="/beers/:id"
        component={BeerModal}
        parentPath="/"
      />
      <ModalContainer />
    </div>
  </Router>
);

export default createRoutes;
