import { Component } from 'react';
import { Counter } from './counter';

export class PageWrapper extends Component {
  render() {
    return <div id="pageWrapper">Page number: {Counter.getCount()}</div>;
  }
}
