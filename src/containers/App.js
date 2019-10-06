import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import TodoList from './TodoList';

import '../Styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
