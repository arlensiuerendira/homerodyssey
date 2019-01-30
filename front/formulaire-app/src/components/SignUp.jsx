import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordVerification: '',
      name: '',
      lastName: '',
      alert: 'none'
    };
  }

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };

  updatePasswordVerificationField = event => {
    this.setState({ passwordVerification: event.target.value });
  };

  updateNameField = event => {
    this.setState({ name: event.target.value });
  };

  updateLastNameField = event => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
      passwordVerification: '',
      name: '',
      lastName: '',
      alert: 'block'
    });
    setTimeout(() => {
      this.setState({ alert: 'none' });
    }, 1500);
  };

  render() {
    let entries = Object.entries(this.state);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-8 offset-2'>
            <h5 className='my-3'>Verify your information:</h5>
            {entries.map(state => {
              return (
                <p key={state[0]}>
                  {state[0]}: {state[1]}
                </p>
              );
            })}
          </div>
        </div>
        <form className='content' onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Your email'
            value={this.state.email}
            onChange={this.updateEmailField}
          />
          <br />
          <input
            type='password'
            name='password'
            placeholder='Your password'
            value={this.state.password}
            onChange={this.updatePasswordField}
          />
          <br />
          <input
            type='password'
            name='passwordVerification'
            placeholder='Please re-enter your password'
            value={this.state.passwordVerification}
            onChange={this.updatePasswordVerificationField}
          />
          <br />
          <input
            type='text'
            name='name'
            placeholder='Your name here'
            value={this.state.name}
            onChange={this.updateNameField}
          />
          <br />
          <input
            type='text'
            name='last_name'
            placeholder='Your last name here'
            value={this.state.lastName}
            onChange={this.updateLastNameField}
          />
          <br />
          <input type='submit' value='Submit' />
        </form>
        <div
          className='alert alert-primary col-12'
          role='alert'
          style={{ display: `${this.state.alert}` }}
        >
          Form has been sent
        </div>
      </div>
    );
  }
}

export default SignUp;
