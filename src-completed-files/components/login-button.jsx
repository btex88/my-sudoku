import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {
  render() {
    const { buttonStatus } = this.props;
    return (
      <Link to={buttonStatus ? "/title" : "#"}>
        <button
          type="button"
          className={
            buttonStatus
              ? 'bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'
              : `bg-pink-500 text-white font-bold py-2 px-4 rounded opacity-50
            cursor-not-allowed`
          }
        >
          Login
        </button>
      </Link>
    );
  }
}

const mapStateToProps = (state) => state;

LoginButton.propTypes = {
  buttonStatus: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(LoginButton);
