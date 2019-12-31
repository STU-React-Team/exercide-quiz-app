import { combineReducers } from 'redux';
import questions from 'reducers/questions';
import answers from 'reducers/answers';
import auth from 'reducers/auth';
import showBtnFinish from 'reducers/showBtnFinish';

const rootReducer = combineReducers({
  questions,
  answers,
  auth,
  showBtnFinish,
});

export default rootReducer;
