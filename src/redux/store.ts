import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';
import { ImmutableObject } from 'seamless-immutable';
import { IState } from '@interfaces/reduxInterfaces';

import auth from './auth/reducer';
import pokemon from './pokemon/reducer';

configureMergeState((state: ImmutableObject<IState>, diff: IState) => state.merge(diff));

const reducers = combineReducers({
  auth,
  pokemon
});

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

if (__DEV__ && Reactotron.createEnhancer) enhancers.push(Reactotron.createEnhancer(true));

// In DEV mode, we'll create the store through Reactotron
const store = createStore(reducers, compose(...enhancers));

if (__DEV__ && Reactotron.setReduxStore) Reactotron.setReduxStore(store);

export default store;
