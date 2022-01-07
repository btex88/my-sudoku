import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import local from '../services/handle-local-storage';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { user } = this.props;
    local.set('mySudokuUser', user);
  }

  render() {
    const { buttonStatus } = this.props;
    return (
      <Link to={buttonStatus ? '/title' : '#'}>
        <button
          type="button"
          className={
            buttonStatus
              ? 'bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'
              : `bg-pink-500 text-white font-bold py-2 px-4 rounded opacity-50
            cursor-not-allowed`
          }
          onClick={() => this.handleClick()}
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
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(LoginButton);
