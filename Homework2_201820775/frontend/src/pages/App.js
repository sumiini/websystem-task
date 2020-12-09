import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Component/Header';
import CreateReview from './CreateReview';
import Reviews from './Reviews';


class App extends React.Component {
  render() {
      return (
          <Router>
              <Header />
              <Switch>
                  <Route exact path="/" component={Reviews} />
                  <Route exact path="/review/new" component={CreateReview} />
              </Switch>
          </Router>
      );
  }
}

export default App;
