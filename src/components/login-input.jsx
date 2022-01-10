import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import * as ACT from '../actions';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.checkInput = this.checkInput.bind(this);
  }

  componentDidMount() {
    const { disableButton } = this.props;
    disableButton();
  }

  componentWillUnmount() {
    const { disableButton } = this.props;
    disableButton();
  }

  checkInput() {
    const { enableButton, disableButton } = this.props;
    const { user } = store.getState();
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
    const { type, placeholder, id, addName, addEmail, user } = this.props;
    return (
      <input
        className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700
      leading-tight focus:outline-none focus:shadow-outline text-center"
        type={ type }
        placeholder={ placeholder }
        value={ id === 'name' ? user.name : user.email }
        onChange={ (e) => {
          if (id === 'name') addName(e.target.value);
          if (id === 'email') addEmail(e.target.value);
          this.checkInput();
        } }
      />
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addName: (payload) => dispatch(ACT.addName(payload)),
  addEmail: (payload) => dispatch(ACT.addEmail(payload)),
  enableButton: () => dispatch(ACT.enableButton()),
  disableButton: () => dispatch(ACT.disableButton()),
});


LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addName: PropTypes.func.isRequired,
  addEmail: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  disableButton: PropTypes.func.isRequired,
  enableButton: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginInput);
