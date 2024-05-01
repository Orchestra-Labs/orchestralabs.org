import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { design } from './theme/design';

const applyGlobalStyles = () => {
  document.body.style.background = design.colors.black;
};

applyGlobalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
