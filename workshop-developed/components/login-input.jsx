import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.checkInput = this.checkInput.bind(this);
  }

  checkInput() {
    const { enableButton, disableButton } = this.props;
    const user = store.getState().user;
    // eslint-disable-next-line no-useless-escape
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user.name && re.test(user.email)) {
      enableButton();
      return true;
    }
    disableButton();
    return false;
  }

  render() {
    const { type, placeholder, id, user, addEmail, addName } = this.props;
    return (
      <input
        className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700
      leading-tight focus:outline-none focus:shadow-outline text-center"
        type={type}
        placeholder={placeholder}
        value={id === 'name' ? user.name : user.email}
        onChange={(event) => {
          if (id === 'name') addName(event.target.value);
          if (id === 'email') addEmail(event.target.value);
          this.checkInput();
        }}
      />
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => dispatch(ACT.addName(name)),
    addEmail: (email) => dispatch(ACT.addEmail(email)),
    enableButton: () => dispatch(ACT.enableButton()),
    disableButton: () => dispatch(ACT.disableButton()),
  };
};

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  addEmail: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired,
  disableButton: PropTypes.string.isRequired,
  enableButton: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginInput);
