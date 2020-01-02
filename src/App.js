import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { fetchQuestions } from 'actions/';
import { connect } from 'react-redux';
import Quiz from 'components/quiz/';
import Results from 'components/results/';
import PropTypes from 'prop-types';
import 'App.scss';

const authRoute = (auth, path, Component) => (
  <Route path={`/${path}`}>{auth ? <Component /> : <Redirect to="/" />}</Route>
);

const App = props => {
  const { auth, onFetchQuestions } = props;
  useEffect(() => {
    onFetchQuestions();
  }, [onFetchQuestions]);

  const contentWelcome = (
    <div className="container app__welcome">
      <h2 className="app__heading app__heading--big">Welcome to quiz app</h2>
      <Link to="/ex" className="app__link">
        Start
      </Link>
    </div>
  );

  return (
    <div className="app">
      <div className="app__title">
        <h1> QUIZ APP </h1>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            {contentWelcome}
          </Route>
          {authRoute(auth, 'ex', Quiz)}
          {authRoute(auth, 'results', Results)}
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {
  auth: PropTypes.bool.isRequired,
  onFetchQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  onFetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
