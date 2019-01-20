// import {createStore, combineReducers} from 'redux';
import { createStore, combineReducers, compose } from 'redux';
import placeReducer from '../reducers/placesReducers';

const rootReducer = combineReducers({places:placeReducer});

let composeEnchancer = compose;

if(__DEV__){
  composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const configureStore = () => {
  return createStore(rootReducer, composeEnchancer());
};

export default configureStore;
