import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import local from '../services/handle-local-storage';
import panda from '../images/panda.png';
import _ from 'lodash';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.checkUser = this.checkUser.bind(this);
  }

  checkUser() {
    const { user } = this.props;
    const localUser = local.get('mySudokuUser');
    if (_.isEmpty(localUser)) return { ...user };
    return { ...localUser };
  }

  render() {
    const user = this.checkUser();
    return (
      <div
        className="w-full h-16 fixed top-0 bg-pink-100 flex flex-row flex-nowrap
        items-center justify-evenly pt-2"
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={ panda } alt="panda" className="w-12 h-12" />
        </div>
        <div
          className="h-full flex flex-col items-center justify-evenly text-md
        text-gray-800"
        >
          <span
            className="font-semibold tracking-wide animation-pulse text-gray-600 text-xl"
          >
            Welcome
          </span>
          <span
            className="font-semibold tracking-wide animation-pulse text-gray-600 text-xl"
          >
            {user.name}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
