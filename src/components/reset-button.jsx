import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';
import * as API from '../services/handle-api';
import local from '../services/handle-local-storage';

class ResetButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAPI() {
    const { solveGame, getAPI, selectedDifficulty } = this.props;
    getAPI(selectedDifficulty).then((value) => {
      local.set('mySudokuGame', value.payload);
      solveGame({ board: value.payload }).then((data) => {
        local.set('mySudokuSolvedGame', data.payload);
      });
    });
  }

  handleClick() {
    const { selectNumber, heighlightNum } = this.props;
    this.handleAPI();
    selectNumber();
    heighlightNum();
  }

  render() {
    return (
      <button
        type="button"
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold w-24 h-10 rounded
        tracking-wider"
        onClick={() => this.handleClick()}
      >
        Reset
      </button>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getAPI: (gameData) => dispatch(API.getAPI(gameData)),
  solveGame: (game) => dispatch(API.solveGame(game)),

  selectNumber: () => dispatch(ACT.selectNumber()),
  heighlightNum: () => dispatch(ACT.heighlightNum()),
});

ResetButton.propTypes = {
  getAPI: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
  selectNumber: PropTypes.func.isRequired,
  heighlightNum: PropTypes.func.isRequired,
  selectedDifficulty: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
