import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';
import * as API from '../services/handle-api';
import store from '../store';
import local from '../services/handle-local-storage';

class ResetButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
  }

  handleAPI() {
    const { solveGame, getAPI, game, selectNumber } = this.props;
    getAPI().then(() => {
      local.set('mySudokuGame', store.getState().game);
    });
    solveGame({ board: game }).then(() =>
      local.set('mySudokuSolvedGame', store.getState().solvedGame),
    );
    selectNumber();
  }

  render() {
    return (
      <button
        type="button"
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold w-24 h-10 rounded"
        onClick={() => this.handleAPI()}
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
  selectNumber: (num) => dispatch(ACT.selectNumber(num)),
});

ResetButton.propTypes = {
  getAPI: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
  game: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectNumber: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
