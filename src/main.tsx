import React from 'react';
import { App } from './App.tsx';
import './index.css';
import { getInfo } from './bottomSection/getInfo.tsx';
import { getExactInfo } from './bottomSection/getExactInfo.tsx';
import { createRoot } from 'react-dom/client';
import { Counter } from './bottomSection/counter.tsx';
import Loader from './loader.tsx';

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
