import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';

export default class App extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

render(<App />, document.getElementById('app'));
