import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/Store'
import { Provider } from 'react-redux'
import { Counter } from './features/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  <Counter/>
</Provider>,
);


