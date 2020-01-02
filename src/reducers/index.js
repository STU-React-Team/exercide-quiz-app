import { combineReducers } from 'redux';
import questions from 'reducers/questions';
import answers from 'reducers/answers';
import auth from 'reducers/auth';
import isBtnFinish from 'reducers/showBtnFinish';

const rootReducer = combineReducers({
  questions,
  answers,
  auth,
  isBtnFinish,
});

export default rootReducer;
