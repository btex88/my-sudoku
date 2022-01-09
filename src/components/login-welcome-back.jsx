import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

class LoginWelcomeBack extends React.Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.handleRedirect();
  }

  handleRedirect() {
    const TWO = 2000;
    setTimeout(() => {
      window.location.pathname = '/title';
    }, TWO);
  }

  render() {
    const { user } = this.props;
    return (
      <div
        className="w-full h-full flex flex-col flex-nowrap items-center justify-center"
      >
        <h1
          className="text-4xl tracking-wide capitalize text-center text-gray-700
          animate-pulse leading-relaxed "
        >
          Welcome Back {user.name}
        </h1>
        <AiOutlineLoading3Quarters
          className="animate-spin text-6xl mt-16 text-pink-400"
        />
      </div>
    );
  }
}

LoginWelcomeBack.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default LoginWelcomeBack;
