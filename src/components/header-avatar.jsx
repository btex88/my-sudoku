import React from 'react';
import bear from '../images/bear.png';
import dog from '../images/dog.png';
import hen from '../images/hen.png';
import penguin from '../images/penguin.png';
import rhino from '../images/rhino.png';
import cat from '../images/cat.png';
import ferret from '../images/ferret.png';
import lion from '../images/lion.png';
import ostrich from '../images/ostrich.png';
import puffer_fish from '../images/puffer_fish.png';
import sloth from '../images/sloth.png';
import chicken from '../images/chicken.png';
import giraffe from '../images/giraffe.png';
import llama from '../images/llama.png';
import panda from '../images/panda.png';
import rabbit from '../images/rabbit.png';
import weasel from '../images/weasel.png';

class HeaderAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        bear,
        cat,
        chicken,
        dog,
        ferret,
        giraffe,
        hen,
        lion,
        llama,
        ostrich,
        panda,
        penguin,
        puffer_fish,
        rabbit,
        rhino,
        sloth,
        weasel,
      ],
      index: Math.floor(Math.random() * 16),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({ index: prev.index === 16 ? 0 : prev.index + 1}));
  }

  render() {
    const { images, index } = this.state;
    return (
      <div
        className="w-12 h-12 flex items-center justify-center"
        onClick={() => this.handleClick()}
      >
        <img
          src={[images[index]]}
          alt={images[index]}
          className="h-12"
        />
      </div>
    );
  }
}

export default HeaderAvatar;
