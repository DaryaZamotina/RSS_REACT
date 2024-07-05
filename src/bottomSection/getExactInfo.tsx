//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from '../App';
import '../index.css';

export function getExactInfo() {
  const url: string = 'https://swapi.dev/api/people/search';
  
  let bodySearch = new URLSearchParams({
    name: 'A'
  });
  async function getExactInfoFromWeb(link: string) {
    const response = await fetch(link, {
      method: 'post',
      headers: {
       // 'Content-Type': 'application/json',
       'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodySearch
    });

    const res = await response.json();

    return JSON.stringify(res);
  }

  getExactInfoFromWeb(url)
    .then((info) => {
      //const res = [];
      console.log(info);

     /* for (let i = 0; i < JSON.parse(info).results.length; i++) {
        res.push(JSON.parse(info).results[i]);
      }
      localStorage.setItem('resultSearch', JSON.stringify(res));*/
      return info;
    })
    .catch((error) => console.log(error));
}
