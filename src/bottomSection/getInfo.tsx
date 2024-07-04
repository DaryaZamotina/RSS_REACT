import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import '../index.css';

export function getInfo() {
  let url: string = 'https://swapi.dev/api/people/';

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
      let res = [];
      for (let i = 0; i < JSON.parse(info).results.length; i++) {
        res.push(JSON.parse(info).results[i]);
      }
      localStorage.setItem('results', JSON.stringify(res));

      ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      return info;
    })
    .catch((error) => console.log(error));
}
