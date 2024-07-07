import { Component } from 'react';
import { getExactInfo } from '../bottomSection/getExactInfo';
import ButtonError from './buttonError';

export default class TopSection extends Component {
  setValue(val: string) {
    const newVal: string = val.trim();
    localStorage.setItem('previousSearch', newVal);
  }

  getValue() {
    let result;
    if (localStorage.getItem('previousSearch') !== null) {
      result = localStorage.getItem('previousSearch') ?? undefined;
    } else result = '';
    return result;
  }

  render() {
    return (
      <section id="top_section">
        <input
          type="search"
          id="inputSearch"
          onChange={(event) => this.setValue(event.target.value)}
          placeholder={this.getValue()}
        />
        <input id="buttonSearch" type="button" value="Search" onClick={getExactInfo} />
        <ButtonError />
      </section>
    );
  }
}
