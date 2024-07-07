import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { getInfo } from './bottomSection/getInfo.tsx';
import Loader from './loader.tsx';
import { getExactInfo } from './bottomSection/getExactInfo.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('results')) {
    getInfo();
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <Loader />
      </React.StrictMode>
    );
  } else if (localStorage.getItem('previousSearch')) {
    getExactInfo();
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
