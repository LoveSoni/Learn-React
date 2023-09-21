import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PrintHello from './MyNewApp';
import GoAndCallMyNewApp from './CallMyNewApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  // directly calling Print Hello
  // <PrintHello />

  // calling PrintHello thought another component
  <GoAndCallMyNewApp />
);
