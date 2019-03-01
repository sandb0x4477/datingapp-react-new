import { combineReducers } from 'redux';

import testReducer from '../components/test/testReducer';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
