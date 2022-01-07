import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from '../services/handle-api';

class SolveButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.isEqual = this.isEqual.bind(this);
  }

  isEqual(arrBase, arrCompare) {
    if (arrBase.length === arrCompare.length) {
      for (let index = 0; index < arrBase.length; index += 1) {
        return arrBase[index].every(
          (num, indx) => num === arrCompare[index][indx],
        );
      }
    }
    return false;
  }

  handleClick() {
    const {
      game,
      savedGame: { solution },
      solveGame,
      getAPI,
    } = this.props;
    if (this.isEqual(solution, game)) {
      alert('You won!');
    } else {
      alert('Not this time!');
      getAPI('random');
      solveGame({ board: game });
    }
  }

  render() {
    return (
      <button
        type="button"
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold w-24 h-10 rounded"
        onClick={() => this.handleClick()}
      >
        Solve
      </button>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getAPI: (gameData) => dispatch(API.getAPI(gameData)),
  solveGame: (game) => dispatch(API.solveGame(game)),
});

SolveButton.propTypes = {
  getAPI: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
  savedGame: PropTypes.objectOf([PropTypes.string, PropTypes.array]).isRequired,
  game: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SolveButton);
