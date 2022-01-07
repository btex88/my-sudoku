import React from 'react';
import LoginButton from '../components/login-button';
import LoginInput from '../components/login-input';


class Login extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex flex-col flex-nowrap items-center">
        <div className="w-full h-36 flex items-center justify-center pt-16">
          <span className="text-4xl font-semibold tracking-widest text-gray-600">
            mySudoku
          </span>
        </div>
        <div
          className="w-full h-64 flex flex-col flex-nowrap items-center justify-evenly
          pt-16"
        >
          <LoginInput id="name" type="text" placeholder="Name" />
          <LoginInput id="email" type="email" placeholder="Email" />
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;
