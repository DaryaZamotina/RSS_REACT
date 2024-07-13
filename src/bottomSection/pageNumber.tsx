import { Component } from 'react';
import { Counter } from './counter';

export class PageWrapper extends Component {
  render() {
    let numberOfPages: number = Math.ceil(Number(localStorage.getItem('pagesNumber')) / 10);
    let pages;
    let wrapperPages = [];
    let currentCount: number = Counter.getCount();

    for (let i = 1; i <= numberOfPages; i++) {
      if (i === currentCount) {
        pages = (
          <li className="page" id="currentPage" key={i}>
            {i},{' '}
          </li>
        );
      }
      if (i !== currentCount) {
        pages = (
          <li className="page" key={i}>
            {i},{' '}
          </li>
        );
      }
      wrapperPages.push(pages);
    }
    return (
      <div id="pageWrapper">
        <ul id="wrapperPages">{wrapperPages}</ul>
      </div>
    );
  }
}
