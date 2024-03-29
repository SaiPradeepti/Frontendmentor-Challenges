import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import { AppProvider } from './components/context'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
