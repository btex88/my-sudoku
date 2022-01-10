import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from '../services/handle-api';
import local from '../services/handle-local-storage';

class SolveButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.isEqual = this.isEqual.bind(this);
  }

  isEqual() {
    const arrBase = local.get('mySudokuSolvedGame').solution;
    const arrCompare = local.get('mySudokuGame');
    if (arrBase.length === arrCompare.length) {
      // eslint-disable-next-line sonarjs/no-one-iteration-loop
      for (let index = 0; index < arrBase.length; index += 1) {
        return arrBase[index].every(
          (num, indx) => num === arrCompare[index][indx],
        );
      }
    }
    return false;
  }

  handleClick() {
    const { solveGame, getAPI } = this.props;
    if (this.isEqual()) {
      alert('You won!');
    } else {
      alert('Not this time!');
      getAPI().then((value) => {
        local.set('mySudokuGame', value.payload);
        solveGame({ board: value.payload }).then((data) => {
          local.set('mySudokuSolvedGame', data.payload);
        });
      });
    }
  }

  render() {
    return (
      <button
        type="button"
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold w-24 h-10 rounded
        tracking-wider"
        onClick={() => this.handleClick()}
      >
        Solve
      </button>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getAPI: (payload) => dispatch(API.getAPI(payload)),
  solveGame: (payload) => dispatch(API.solveGame(payload)),
});

SolveButton.propTypes = {
  getAPI: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SolveButton);
