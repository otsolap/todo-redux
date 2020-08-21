import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import ToDo from './containers/ToDo';


const store = createStore(
  rootReducer,
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
 <ToDo />
  </Provider>,
  document.getElementById('root')
);
