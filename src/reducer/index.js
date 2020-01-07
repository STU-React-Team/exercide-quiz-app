import { combineReducers } from 'redux';

import reducer from 'modules/ReducerQuestion';

const rootReducer = combineReducers({
  reducerQuestion: reducer,
});

export default rootReducer;
