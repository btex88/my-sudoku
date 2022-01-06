import React from 'react';
import { connect } from 'react-redux';

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
    } = this.props;
    if (this.isEqual(solution, game)) return alert('You won!');
    return alert('Not this time!');
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

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(SolveButton);
