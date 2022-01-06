import React from 'react';
import { connect } from 'react-redux';
import * as ACT from '../actions';
import { getAPI, solveGame } from '../services/handle-api';

class ResetButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
  }

  handleAPI() {
    const { addGame, resetNumber, addSolvedGame } = this.props;
    getAPI('random').then((value) => {
      addGame(value.board);
      solveGame(value).then((data) => addSolvedGame(data))
      resetNumber();
    });
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
  addGame: (gameData) => dispatch(ACT.addGame(gameData)),
  resetNumber: (gameData) => dispatch(ACT.resetNumber(gameData)),
  addSolvedGame: (game) => dispatch(ACT.addSolvedGame(game)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
