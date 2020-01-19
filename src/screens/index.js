import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import Project from './Project';
import Product from './Product';
import Wrapper from './Wrapper';

export default ({ routes, setPage }) => {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/project" render={() => <Project />} />
          <Route path="/product" render={() => <Project />} />
          <Route exact path="/" render={() => <Landing {...{ routes, setPage }} />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Wrapper>
  );
};
