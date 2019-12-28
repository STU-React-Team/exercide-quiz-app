import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'App.scss';
import Question from './components/Question';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container app__welcome">
              <h2 className="app__heading app__heading--big">
                Welcome to quiz app
              </h2>
              <Link to="/ex" className="app__link">
                {' '}
                Start{' '}
              </Link>
            </div>
          </Route>
          <Route path="/ex">
            <Question />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
