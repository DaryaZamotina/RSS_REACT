import React from 'react';
import { App } from '../App';
import '../index.css';
import { createRoot } from 'react-dom/client';
import '../index.css';

export function getExactInfo() {
  const url: string = `https://swapi.dev/api/people/?search=${localStorage.getItem('previousSearch')}`;

  async function getExactInfoFromWeb(link: string) {
    const response = await fetch(link, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await response.json();

    return JSON.stringify(res);
  }

  getExactInfoFromWeb(url)
    .then((info) => {
      const res = [];

      for (let i = 0; i < JSON.parse(info).results.length; i++) {
        res.push(JSON.parse(info).results[i]);
      }
      localStorage.setItem('results', JSON.stringify(res));

      if (document.getElementById('loader') && document.getElementById('loader') !== null) {
        const root = createRoot(document.getElementById('loader'));

        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      }

      return info;
    })
    .catch((error) => console.log(error));
}
