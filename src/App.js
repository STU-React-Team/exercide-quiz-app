import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { fetchQuestions } from 'actions/';
import { useDispatch, useSelector } from 'react-redux';
import Quiz from 'components/quiz/';
import Results from 'components/results/';
import 'App.scss';

const App = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app__title">
        <h1> QUIZ APP </h1>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container app__welcome">
              <h2 className="app__heading app__heading--big">
                Welcome to quiz app
              </h2>
              <Link to="/ex" className="app__link">
                Start
              </Link>
            </div>
          </Route>
          <Route path="/ex">{auth ? <Quiz /> : <Redirect to="/" />}</Route>
          <Route path="/results">
            {auth ? <Results /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
