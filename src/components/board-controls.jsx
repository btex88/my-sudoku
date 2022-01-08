import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class BoardControls extends React.Component {
  constructor(props) {
    super(props);

    this.renderButtonNumber = this.renderButtonNumber.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderDifficulty = this.renderDifficulty.bind(this);
  }

  handleClick(event) {
    const { selectedNumber, selectNumber, heighlightNum } = this.props;
    const { id } = event.target;
    if (id === selectedNumber) {
      selectNumber();
      heighlightNum();
    } else {
      selectNumber(id);
      heighlightNum(id);
    }
  }

  renderButtonNumber() {
    const { selectedNumber } = this.props;
    const values = ['X', 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return values.map((value) => (
      <button
        id={value}
        key={`btn-0${value}`}
        type="button"
        className={
          selectedNumber == value
            ? 'h-8 w-8 border rounded font-bold text-lg text-gray-700 bg-purple-400'
            : 'h-8 w-8 border rounded font-bold text-lg text-gray-700 bg-pink-400'
        }
        onClick={(event) => this.handleClick(event)}
      >
        {value}
      </button>
    ));
  }

  renderDifficulty() {
    const { solvedGame } = this.props;
    if (
      Object.keys(solvedGame).length !== 0 &&
      solvedGame.constructor === Object
    ) {
      return (
        <span className="capitalize text-pink-900 text-xl">
          {`Difficulty: ${solvedGame.difficulty}`}
        </span>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="w-full h-20 flex flex-col items-center justify-around px-2">
        <div className="w-full h-8 flex items-center justify-center">
          {this.renderDifficulty()}
        </div>
        <div className="w-full h-8 flex items-center justify-center">
          {this.renderButtonNumber()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  selectNumber: (num) => dispatch(ACT.selectNumber(num)),
  heighlightNum: (num) => dispatch(ACT.heighlightNum(num)),
});

BoardControls.propTypes = {
  selectedNumber: PropTypes.string.isRequired,
  heighlightNum: PropTypes.func.isRequired,
  selectNumber: PropTypes.func.isRequired,
  solvedGame: PropTypes.shape([PropTypes.string, PropTypes.array]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardControls);
