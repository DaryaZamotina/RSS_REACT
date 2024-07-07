import React from 'react';
import {App} from '../App';
import '../index.css';
import { createRoot } from 'react-dom/client';
//import BottomSection from './bottomSection';

export function getInfo(search?: string) {
  let url: string;
  if (search) {
    url = `https://swapi.dev/api/people/${search}`;
    console.log(url);
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
      console.log(info);
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
