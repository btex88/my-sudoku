const INIT = {};

const ADD_SOLVED_GAME = 'ADD_SOLVED_GAME';

const savedGame = (state = INIT, action) => {
  if (action.type === ADD_SOLVED_GAME) return action.payload;
  return state;
};

export default savedGame;
