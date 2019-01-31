import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordVerification: '',
      name: '',
      lastName: ''
    };
  }

  render() {
    return <div className='container' align='center' />;
  }
}

export default SignUp;
