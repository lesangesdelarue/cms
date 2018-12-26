import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Authentification from './components/authentification';
import Cms from './components/cms';

import gauth from './gauth';
import gstate from './gstate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = gstate;

    gauth.onConnectSubmit = this.handleConnected.bind(this);
  }
  render() {
    return this.state.auth.connected === false ? <Authentification /> : <Cms />;
  }

  async handleConnected(params) {
    const res = await gauth.submit(params);
    this.setState({ auth: { connected: res.connected } });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
