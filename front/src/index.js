import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Authentification from './components/authentification';
import Cms from './components/cms';

import app from './app';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: { login: '', connected: false, error: false },
      nav: { current: 'offers' },
    };

    // [!] we want global state available from everywhere
    app.getState = this.getState.bind(this);
    app.setState = this.setState.bind(this);
  }
  getState() {
    return this.state;
  }

  render() {
    return this.state.auth.connected === false ? <Authentification /> : <Cms />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
