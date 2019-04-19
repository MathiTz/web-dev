import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import reducers from './ducks';

import Reactotron from '../config/reactotron';

const middlewares = [];

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    Reactotron.createEnhancer(),
  ),
);

sagaMiddleware.run(sagas);

export default store;
