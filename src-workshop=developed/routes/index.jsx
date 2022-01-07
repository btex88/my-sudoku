import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Title from '../pages/title';
import NotFound from '../pages/not-found';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/title" component={Title}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
