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

  updateField = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
      passwordVerification: '',
      name: '',
      lastName: '',
      countryCode: '',
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
            onChange={this.updateField}
          />
          <br />
          <input
            type='password'
            name='password'
            placeholder='Your password'
            value={this.state.password}
            onChange={this.updateField}
          />
          <br />
          <input
            type='password'
            name='passwordVerification'
            placeholder='Please re-enter your password'
            value={this.state.passwordVerification}
            onChange={this.updateField}
          />
          <br />
          <input
            type='text'
            name='name'
            placeholder='Your name here'
            value={this.state.name}
            onChange={this.updateField}
          />
          <br />
          <input
            type='text'
            name='countryCode'
            placeholder='Your country code (XXX)'
            pattern='[A-Za-z0-9]{3}'
            value={this.state.countryCode}
            onChange={this.updateField}
          />
          <br />
          <input
            type='text'
            name='last_name'
            placeholder='Your last name here'
            value={this.state.lastName}
            onChange={this.updateField}
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
