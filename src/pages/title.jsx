import React from 'react';
import * as COMP from '../components';

class Title extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        <COMP.Header />
        <div className="w-full pt-16">
          <COMP.GradientBar />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-between">
          <COMP.BoardControls />
          <COMP.Board />
          <div className="w-full h-16 flex items-center justify-evenly pb-6">
            <COMP.SolveButton />
            <COMP.ResetButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
