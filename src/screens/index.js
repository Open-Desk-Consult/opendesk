import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Project from './Project';
import Wrapper from './Wrapper';

export default ({ routes, setPage }) => {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/">
            <Landing {...{ routes, setPage }} />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};
