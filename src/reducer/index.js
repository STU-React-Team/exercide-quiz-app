import { combineReducers } from 'redux';

import ReducerQuestion from '../modules/ReducerQuestion';

const rootReducer = combineReducers({
  reducerQuestion: ReducerQuestion,
});

export default rootReducer;
