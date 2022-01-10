import React from 'react';
import * as COMP from '../components';

class Title extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        <COMP.Header />
        <COMP.GradientBar />
        <div className="w-full h-full flex flex-col items-center justify-around pt-20">
          <COMP.DifficultyLabel />
          <COMP.DifficultyBar />
          <COMP.BoardControls />
          <COMP.Board />
          <div className="w-full h-16 flex items-center justify-evenly max-w-sm">
            <COMP.SolveButton />
            <COMP.ResetButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
