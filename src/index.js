import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TheamProvider } from './context';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <TheamProvider>
        <App />
      </TheamProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
