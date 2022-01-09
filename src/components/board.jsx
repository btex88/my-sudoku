import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import local from '../services/handle-local-storage';
import * as API from '../services/handle-api';
import * as ACT from '../actions';
import _ from 'lodash';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleAPI = this.handleAPI.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.insertNumber = this.insertNumber.bind(this);
    this.deleteNumber = this.deleteNumber.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI() {
    const localGame = local.get('mySudokuGame');
    const localSolvedGame = local.get('mySudokuSolvedGame');
    const { solveGame, getAPI, addSolvedGame, addGame } = this.props;
    if (!localGame && _.isEmpty(localSolvedGame)) {
      getAPI().then((value) => {
        local.set('mySudokuGame', value.payload);
        solveGame({ board: value.payload }).then(data => {
          local.set('mySudokuSolvedGame', data.payload);
        });
      });
    } else {
      addGame(localGame);
      addSolvedGame(localSolvedGame);
    }
  }

  insertNumber(x, y) {
    const { game, selectedNumber, addNewValue, selectNumber } = this.props;
    const newValues = [...game];
    newValues[x].splice(y, 1, Number(selectedNumber));
    addNewValue([...newValues]);
    local.set('mySudokuGame', [...newValues]);
    selectNumber();
  }

  deleteNumber(x, y) {
    const { game, addNewValue, selectNumber } = this.props;
    const newValues = [...game];
    newValues[x].splice(y, 1, 0);
    addNewValue([...newValues]);
    local.set('mySudokuGame', [...newValues]);
    selectNumber();
  }

  handleClick(currValue, x, y) {
    const { selectedNumber, heighlightNum, selectNumber, highlighted } = this.props;
    if (!currValue && !selectedNumber && !highlighted) return '';
    if (!currValue && selectedNumber !== 'X') this.insertNumber(x, y);
    if (!currValue && selectedNumber === '') heighlightNum();
    if (!currValue && selectedNumber === 'X') selectNumber();
    if (currValue && selectedNumber === 'X') this.deleteNumber(x, y);
    if (currValue && !selectedNumber) heighlightNum(currValue.toLocaleString());
  }

  handleStyle(x, y, value) {
    const { highlighted } = this.props;
    if (value === Number(highlighted) && highlighted) {
      return `w-8 h-8 border-2 border-pink-500 flex items-center justify-center
      bg-yellow-500 font-semibold`;
    }
    if ([0, 1, 2, 6, 7, 8].includes(x) && [0, 1, 2, 6, 7, 8].includes(y)) {
      return `w-8 h-8 border border-pink-300  flex items-center justify-center
        bg-pink-200`;
    }
    if ([3, 4, 5].includes(x) && [3, 4, 5].includes(y)) {
      return `w-8 h-8 border border-pink-300  flex items-center justify-center
        bg-pink-200`;
    }
    return 'w-8 h-8 border border-pink-300 flex items-center justify-center bg-pink-50';
  }

  renderBoard() {
    const { game } = this.props;
    if (game.length === 9 && game.constructor === Array) {
      return game.map((row, index) => (
        <div key={`row-${index}`} className="w-full h-8 flex flex-row text-xl">
          {row.map((square, indx) => (
            <button
              type="button"
              key={`row-${index}-square${indx}`}
              className={this.handleStyle(index, indx, square)}
              style={ { fontFamily: 'Lato, sans-serif' } }
              onClick={() => this.handleClick(square, index, indx)}
            >
              {square || null}
            </button>
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
  getAPI: () => dispatch(API.getAPI()),
  solveGame: (game) => dispatch(API.solveGame(game)),
  heighlightNum: (game) => dispatch(ACT.heighlightNum(game)),
  addSolvedGame: (solvedGame) => dispatch(ACT.addSolvedGame(solvedGame)),
  addGame: (game) => dispatch(ACT.addGame(game)),
  addNewValue: (newValue) => dispatch(ACT.addNewValue(newValue)),
  selectNumber: (num) => dispatch(ACT.selectNumber(num)),
});

Board.propTypes = {
  selectedNumber: PropTypes.string.isRequired,
  highlighted: PropTypes.string.isRequired,
  game: PropTypes.arrayOf(PropTypes.array).isRequired,
  addNewValue: PropTypes.func.isRequired,
  selectNumber: PropTypes.func.isRequired,
  heighlightNum: PropTypes.func.isRequired,
  getAPI: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
  addGame: PropTypes.func.isRequired,
  addSolvedGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
