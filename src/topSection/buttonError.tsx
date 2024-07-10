import { Component } from 'react';

export default class ButtonError extends Component {
  getError() {
    localStorage.clear();
  }

  render() {
    return (
      <section id="buttonErrorWrapper">
        <input id="buttonError" type="button" value="Error Generator" onClick={this.getError} />
      </section>
    );
  }
}
