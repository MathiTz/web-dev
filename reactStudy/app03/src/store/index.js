import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

import Reactotron from '../config/reactotron';

// const createAppropriateStore = process.env.NODE_ENV === 'development' ? Reactotron.log.createStore : createStore;

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...[]),
    Reactotron.createEnhancer(),
  ),
);

export default store;
