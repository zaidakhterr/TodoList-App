import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const enchancer = applyMiddleware(...middleware);

export default createStore(rootReducer, initialState, enchancer);
