import { Component } from 'react';
import { getInfo } from './getInfo';

export default class ButtonWrapper extends Component {
  /*constructor(props){
    super(props);
    this.state = 1;
  }*/
  getCount() {
    let i: number;
    i = 1;
    i++;
    return i;
  }

  render() {
    return (
      <form id="buttonWrapper">
        <input
          id="buttonPrevious"
          type="button"
          value="Previous"
          onClick={() => getInfo('previous')}
        />
        <input
          id="buttonNext"
          type="button"
          value="Next"
          onClick={() => getInfo(`?page=${this.getCount}`)}
        />
      </form>
    );
  }
}
