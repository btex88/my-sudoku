import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DifficultyLabel extends React.Component {
  constructor(props) {
    super(props);

    this.renderDifficulty = this.renderDifficulty.bind(this);
  }

  renderDifficulty() {
    const { solvedGame } = this.props;
    if (
      Object.keys(solvedGame).length !== 0 &&
      solvedGame.constructor === Object
    ) {
      return (
        <div className="w-full flex flex-col items-center justify-evenly">
          <span className="capitalize text-pink-900 text-xl tracking-wider">
            Difficulty: {solvedGame.difficulty}
          </span>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="w-full h-8 flex flex-col items-center justify-center">
        {this.renderDifficulty()}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

DifficultyLabel.propTypes = {
  solvedGame: PropTypes.shape([PropTypes.string, PropTypes.array]).isRequired,
};

export default connect(mapStateToProps)(DifficultyLabel);
