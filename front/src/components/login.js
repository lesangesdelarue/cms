import React from 'react';

import app from '../app';

import '../css/login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, login: '', passwd: '' };

    this.login_handleChange = this.login_handleChange.bind(this);
    this.passwd_handleChange = this.passwd_handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  login_handleChange(event) {
    this.setState({ login: event.target.value });
  }

  passwd_handleChange(event) {
    this.setState({ passwd: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const auth = await app.actionPayload('connect', this.state);
    const { error } = auth;
    error && this.setState({ error: true });
  }

  render() {
    return (
      <div className="authentication">
        <h1>Les Anges de la Rue</h1>
        {this.state.error === true && (
          <p className="authentication__error">
            Mauvais login ou mot de passe
          </p>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            onChange={this.login_handleChange}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={this.passwd_handleChange}
          />
          <input type="submit" value="Connexion" />
        </form>
      </div>
    );
  }
}
