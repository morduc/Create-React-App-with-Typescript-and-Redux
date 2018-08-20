import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware,  compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers';

export const history = createHistory()

const initialState:any = {};
const enhancers:any[] = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];



const w : any = window as any;
const devtools: any = w.devToolsExtension ? w.devToolsExtension() : (f:any)=>f;

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
    devtools,
  );

const store = createStore(
rootReducer,
initialState,
composedEnhancers
)

export default store