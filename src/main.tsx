import React from 'react';
//import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { getInfo } from './bottomSection/getInfo.tsx';
import Loader from './loader.tsx';
import { getExactInfo } from './bottomSection/getExactInfo.tsx';
import { Counter } from './bottomSection/counter.tsx';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
if (!localStorage.getItem('results')) {
  getInfo();

  root.render(
    <React.StrictMode>
      <Loader />
    </React.StrictMode>
  );
} else if (localStorage.getItem('previousSearch')) {
  getExactInfo();

  root.render(
    <React.StrictMode>
      <App info={String(Counter.getCount())} />
    </React.StrictMode>
  );
}
export default root;
