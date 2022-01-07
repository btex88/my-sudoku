import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import panda from '../images/panda.png';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div
        className="w-full h-16 fixed top-0 bg-pink-100 flex flex-row flex-nowrap
        items-center justify-evenly"
      >
        <div className="w-4/12 h-full flex items-center justify-center">
          <img src={panda} alt="panda" className="w-12 h-12" />
        </div>
        <div
          className="w-8/12 h-full flex flex-col items-center justify-evenly text-sm
        text-gray-800"
        >
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
