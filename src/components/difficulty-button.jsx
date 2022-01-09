import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';
import * as API from '../services/handle-api';
import local from '../services/handle-local-storage';

class DifficultyButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAPI(difficulty) {
    const { solveGame, getAPI } = this.props;
    getAPI(difficulty).then((value) => {
      local.set('mySudokuGame', value.payload);
      solveGame({ board: value.payload }).then((data) => {
        local.set('mySudokuSolvedGame', data.payload);
      });
    });
  }

  handleClick(difficulty) {
    const { selectNumber, heighlightNum, selectDifficulty } = this.props;
    this.handleAPI(difficulty);
    selectDifficulty(difficulty);
    selectNumber();
    heighlightNum();
  }

  render() {
    const { label, selectedDifficulty } = this.props;
    return (
      <button
        className={
          selectedDifficulty === label
            ? `h-10 px-2 border-2 rounded text-gray-600 font-bold bg-purple-300 text-md
            capitalize border-purple-500`
            : `h-10 px-2 border rounded text-gray-600 font-semibold bg-pink-300 text-md
            capitalize border-pink-500`
        }
        type="button"
        onClick={() => {
          selectedDifficulty === label ? null : this.handleClick(label);
        }}
      >
        {label}
      </button>
    );
  }
}

DifficultyButton.propTypes = {
  label: PropTypes.string.isRequired,
  selectedDifficulty: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  selectDifficulty: (payload) => dispatch(ACT.selectDifficulty(payload)),
  selectNumber: () => dispatch(ACT.selectNumber()),
  heighlightNum: () => dispatch(ACT.heighlightNum()),
  // Thunked actions
  getAPI: (payload) => dispatch(API.getAPI(payload)),
  solveGame: (payload) => dispatch(API.solveGame(payload)),
});

DifficultyButton.propTypes = {
  selectDifficulty: PropTypes.func.isRequired,
  getAPI: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
  selectNumber: PropTypes.func.isRequired,
  heighlightNum: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyButton);
