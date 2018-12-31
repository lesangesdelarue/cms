import React from 'react';

import app from '../app';

export default class Authentification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', passwd: '' };

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
    app.auth.onConnectSubmit(this.state);
  }

  render() {
    return (
      <div className="authentication">
        <div className="authentication__content">
          <h1>Les Anges de la Rue</h1>
          <p className="authentication__error">Mauvais login ou mot de passe</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Login"
              onChange={this.login_handleChange}
            />
            <br />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={this.passwd_handleChange}
            />
            <br />
            <input type="submit" value="Connexion" />
          </form>
        </div>
      </div>
    );
  }
}
