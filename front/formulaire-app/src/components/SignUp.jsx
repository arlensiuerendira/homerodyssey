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
      alert: 'none',
      details: 'none',
      newname: '',
      newname2: '',
      countryCode: ''
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
      alert: 'block',
      details: 'block'
    });
    setTimeout(() => {
      this.setState({
        alert: 'none'
      });
    }, 1500);
  };

  handleSubmit2 = event => {
    event.preventDefault();
    this.setState({
      newname2: this.state.newname
    });
  };

  render() {
    let entries = Object.entries(this.state);

    let person = {
      firstName: this.state.name,
      lastName: this.state.lastName
    };
    Object.defineProperty(person, 'Hello', {
      get: function() {
        return `Hello ${this.firstName} ${
          this.lastName
        } !! I hope you are doing well today !!`;
      },
      set: function(name) {
        let regex = /[0-9]/g;
        console.log(regex.test(name));
        if (!regex.test(name)) {
          let splitName = name.split(' ');
          this.firstName = splitName[0];
          this.lastName = splitName[1];
        } else {
          this.firstName = this.firstName;
          this.lastName = this.lastName;
        }
      }
    });

    return (
      <div className='container' align='center'>
        <div className='row'>
          <div className='col-6'>
            <h5 className='my-3'>Verify your information:</h5>
            {entries.map(state => {
              return (
                <p key={state[0]}>
                  {state[0]}: {state[1]}
                </p>
              );
            })}
          </div>
          <form className='content' onSubmit={this.handleSubmit}>
            <input
              className='mt-5'
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
              className='mt-2'
            />
            <br />
            <input
              type='password'
              name='passwordVerification'
              placeholder='Please re-enter your password'
              value={this.state.passwordVerification}
              onChange={this.updateField}
              className='mt-2'
            />
            <br />
            <input
              type='text'
              name='name'
              placeholder='Your name here'
              value={this.state.name}
              onChange={this.updateField}
              className='mt-2'
            />
            <br />
            <input
              type='text'
              name='lastName'
              placeholder='Your last name here'
              value={this.state.lastName}
              onChange={this.updateField}
              className='mt-2'
            />
            <br />
            <input
              type='text'
              name='countryCode'
              placeholder='Your country code (XXX)'
              pattern='[A-Za-z0-9]{3}'
              value={this.state.countryCode}
              onChange={this.updateField}
              className='mt-2'
            />
            <br />
            <input type='submit' value='Submit' className='mt-2' />
          </form>
          <br />
          <div
            className='alert alert-primary col-12'
            role='alert'
            style={{ display: `${this.state.alert}` }}
          >
            Form has been sent
          </div>
        </div>
        <div style={{ display: `${this.state.details}` }} className='row'>
          <div className='col-4 offset-1 my-5'>
            <div>
              {this.state.newname2 === ''
                ? person.Hello
                : ((person.Hello = this.state.newname2), person.Hello)}
            </div>
          </div>
          <div className='col-4 offset-1 my-5'>
            <form onSubmit={this.handleSubmit2}>
              <input
                type='text'
                name='newname'
                placeholder='New Name Lastname'
                value={this.state.newname}
                onChange={this.updateField}
              />
              <br />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
