import React from 'react';
import { App } from './App.tsx';
import './index.css';
import { getInfo } from './bottomSection/getInfo.tsx';
import Loader from './loader.tsx';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

getInfo();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (!localStorage.getItem('results')) {
  root.render(
    <React.StrictMode>
      <Loader />
    </React.StrictMode>
  );
}

export default root;
