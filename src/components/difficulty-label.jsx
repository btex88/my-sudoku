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
        <span className="capitalize text-pink-900 text-2xl">
          {`Difficulty: ${solvedGame.difficulty}`}
        </span>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="w-full h-8 flex items-center justify-center font-bold">
        {this.renderDifficulty()}
      </div>
    );
  }
}

DifficultyLabel.propTypes = {
  solvedGame: PropTypes.shape([PropTypes.string, PropTypes.array]).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DifficultyLabel);
