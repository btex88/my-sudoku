import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPI, solveGame } from '../services/handle-api';
import * as ACT from '../actions';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI() {
    const { addGame, addSolvedGame } = this.props;
    getAPI('random').then((value) => {
      addGame(value.board);
      solveGame(value).then((data) => addSolvedGame(data));
    });
  }

  handleClick(currValue, x, y) {
    const { selectedNumber, game, addNewValue, resetNumber } = this.props;
    if (currValue === 0 && selectedNumber !== 'X') {
      const newValues = [...game];
      newValues[x].splice(y, 1, Number(selectedNumber));
      addNewValue([...newValues]);
      resetNumber();
    }
    if (currValue && selectedNumber === 'X') {
      const newValues = [...game];
      newValues[x].splice(y, 1, 0);
      addNewValue([...newValues]);
      resetNumber();
    }
  }

  handleStyle(x, y) {
    if ([0, 1, 2, 6, 7, 8].includes(x)) {
      if ([0, 1, 2, 6, 7, 8].includes(y)) {
        return `w-8 h-8 border border-pink-300  flex items-center justify-center
        bg-pink-200`;
      }
    }
    if ([3, 4, 5].includes(x)) {
      if ([3, 4, 5].includes(y)) {
        return `w-8 h-8 border border-pink-300  flex items-center justify-center
        bg-pink-200`;
      }
    }
    return 'w-8 h-8 border border-pink-300 flex items-center justify-center bg-pink-50';
  }

  renderBoard() {
    const { game } = this.props;
    if (game.length === 9 && game.constructor === Array) {
      return game.map((row, index) => (
        <div key={`row-${index}`} className="w-full h-8 flex flex-row">
          {row.map((square, indx) => (
            <div
              key={`row-${index}-square${indx}`}
              className={this.handleStyle(index, indx)}
              onClick={() => this.handleClick(square, index, indx)}
            >
              {square || null}
            </div>
          ))}
        </div>
      ));
    }
    return null;
  }

  render() {
    return (
      <div className="w-72 h-72 border flex flex-row flex-wrap">
        {this.renderBoard()}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addGame: (gameData) => dispatch(ACT.addGame(gameData)),
  addNewValue: (newValue) => dispatch(ACT.addNewValue(newValue)),
  resetNumber: () => dispatch(ACT.resetNumber()),
  addSolvedGame: (game) => dispatch(ACT.addSolvedGame(game)),
});

Board.propTypes = {
  selectedNumber: PropTypes.string.isRequired,
  game: PropTypes.arrayOf(PropTypes.number).isRequired,
  addNewValue: PropTypes.func.isRequired,
  resetNumber: PropTypes.func.isRequired,
  addGame: PropTypes.func.isRequired,
  addSolvedGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
