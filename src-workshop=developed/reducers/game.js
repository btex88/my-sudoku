const INIT = [];
const ADD_GAME = 'ADD_GAME';
const ERROR = 'ERROR';


const game = (state = INIT, action) => {
  if (action.type === ADD_GAME) return action.payload;
  if (action.type === ERROR) return { status: ERROR, message: action.payload};
  return state;
};

export default game;
