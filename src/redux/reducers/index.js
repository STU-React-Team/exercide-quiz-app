import { combineReducers } from 'redux';
import questions from 'redux/reducers/questions';
import answers from 'redux/reducers/answers';
import auth from 'redux/reducers/auth';
import showBtnFinish from 'redux/reducers/showBtnFinish';

const rootReducer = combineReducers({
  questions,
  answers,
  auth,
  showBtnFinish,
});

export default rootReducer;
