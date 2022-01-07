import React from 'react';
import notFound from '../images/not-found.png';

class NotFound extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex items-center justify-center bg-pink-50">
        <img className="object-contain" src={notFound} alt="not found" />
      </div>
    );
  }
}

export default NotFound;
