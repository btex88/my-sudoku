import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as PP from '../pages';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PP.Login} />
          <Route exact path="/title" component={PP.Title} />
          <Route path="*" component={PP.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
