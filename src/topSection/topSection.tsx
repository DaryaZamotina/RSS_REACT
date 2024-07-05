import { Component } from 'react';
import { getExactInfo } from '../bottomSection/getExactInfo';

export default class TopSection extends Component {
  setValue(val: string) {
    localStorage.setItem('previousSearch', val);
  }

  getValue() {
    let result: string | undefined | string[] | number | null = null;

    if (localStorage.getItem('previousSearch') !== null) {
      result = localStorage.getItem('previousSearch');
    } else result = '';
    return result;
  }

  render() {
    return (
      <section id="top_section">
        <input
          type="search"
          id="inputSearch"
          onChange={() =>
            this.setValue((document.getElementById('inputSearch') as HTMLInputElement).value)
          }
          placeholder={this.getValue()}
        />
        <input id="buttonSearch" type="button" value="Search" onClick={getExactInfo} />
      </section>
    );
  }
}
