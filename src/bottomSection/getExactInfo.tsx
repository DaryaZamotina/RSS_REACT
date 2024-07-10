import React from 'react';
import { App } from '../App';
import '../index.css';
import { Counter } from './counter';
import root from '../main';

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

      root.render(
        <React.StrictMode>
          <App info={String(Counter.getCount())} />
        </React.StrictMode>
      );

      return info;
    })
    .catch((error) => {
      console.log(error);
    });
}
