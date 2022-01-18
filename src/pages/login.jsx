import React from 'react';
import PropTypes from 'prop-types';
import * as COMP from '../components';
import * as ACT from '../actions';
import { connect } from 'react-redux';
import local from '../services/handle-local-storage';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.getLocalUser = this.getLocalUser.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderWelcomeBack = this.renderWelcomeBack.bind(this);
  }

  componentDidMount() {
    const { submit, bypass } = this.props;
    this.getLocalUser() ? bypass() : submit();
  }

  getLocalUser() {
    const user = local.get('mySudokuUser');
    return user && user.name && user.email;
  }

  renderLogin() {
    return (
      <div className="w-full h-full flex flex-col flex-nowrap items-center ">
        <div className="w-full h-36 flex items-center justify-center pt-16">
          <span className="text-4xl font-semibold tracking-widest text-gray-600">
            mySudoku
          </span>
        </div>
        <div
          className="w-full h-64 flex flex-col flex-nowrap items-center justify-evenly
          pt-16"
        >
          <COMP.LoginInput id="name" type="text" placeholder="Name" />
          <COMP.LoginButton />
        </div>
      </div>
    );
  }

  renderWelcomeBack() {
    const user = local.get('mySudokuUser');
    return (
      <div className="w-full h-full flex flex-col flex-nowrap items-center">
        <COMP.LoginWelcomeBack user={user} />
      </div>
    );
  }

  render() {
    const { bypassLogin } = this.props;
    return bypassLogin ? this.renderWelcomeBack() : this.renderLogin();
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  bypass: () => dispatch(ACT.bypass()),
  submit: () => dispatch(ACT.submit()),
});

Login.propTypes = {
  bypassLogin: PropTypes.bool.isRequired,
  bypass: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
