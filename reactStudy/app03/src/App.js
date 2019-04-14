import React from 'react';
import { Provider } from 'react-redux';

import reactotron from './config/reactotron';
import store from './store';

import TodoList from './Todolist';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
