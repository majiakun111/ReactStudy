import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

import { combineReducers } from 'redux';

//reducer应该是一个什么类型? function
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
});

export default reducer;
