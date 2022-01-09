import React from 'react';
import { url } from '../services/handle-api';
import DifficultyButton from './difficulty-button';

class DifficultyBar extends React.Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
  }

  renderButtons() {
    return Object.keys(url).map((value) => (
      <DifficultyButton key={value} label={value} />
    ));
  }

  render() {
    return (
      <div className="h-16 w-full flex flex-row flex-wrap items-center justify-around">
        {this.renderButtons()}
      </div>
    );
  }
}

export default DifficultyBar;
