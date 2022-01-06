const INIT = {};
const ERROR = 'ERROR';

const ADD_SOLVED_GAME = 'ADD_SOLVED_GAME';

const savedGame = (state = INIT, action) => {
  if (action.type === ADD_SOLVED_GAME) return action.payload;
  if (action.type === ERROR) return { status: ERROR, message: action.payload};
  return state;
};

export default savedGame;
