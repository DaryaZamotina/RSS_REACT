import React from 'react';
import { App } from '../App';
import '../index.css';
import root from '../main';

export function getInfo(search?: string) {
  let url: string;
  if (search) {
    url = `https://swapi.dev/api/people/${search}`;
  } else {
    url = `https://swapi.dev/api/people/`;
  }

  async function getInfoFromWeb(link: string) {
    const response = await fetch(link, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await response.json();

    return JSON.stringify(res);
  }

  getInfoFromWeb(url)
    .then((info) => {
      const res = [];
      for (let i = 0; i < JSON.parse(info).results.length; i++) {
        res.push(JSON.parse(info).results[i]);
      }
      localStorage.setItem('pagesNumber', JSON.stringify(JSON.parse(info).count));
      localStorage.setItem('results', JSON.stringify(res));

      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      return info;
    })
    .catch((error) => console.log(error));
}
