import { combineReducers } from 'redux';
import questions from 'redux/reducers/questions';
import answers from 'redux/reducers/answers';
import auth from 'redux/reducers/auth';

const rootReducer = combineReducers({
  questions,
  answers,
  auth,
});

export default rootReducer;
