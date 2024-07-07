import { Component } from 'react';

export default class ButtonError extends Component {
  render() {
    return (
      <section id="buttonErrorWrapper">
        <input
          id="buttonError"
          type="button"
          value="Error Generator"
          onClick={console.log('New Error after clicking button')}
        />
      </section>
    );
  }
}
