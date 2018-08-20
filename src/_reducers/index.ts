import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'


import TestReducer from '../_reducers/test.reducer';

export default combineReducers({
    routing: routerReducer,
    test: TestReducer,
});