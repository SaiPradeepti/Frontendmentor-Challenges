import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContextProvider } from './components/context'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
