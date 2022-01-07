const INIT = [];
const ADD_GAME = 'ADD_GAME';
const ADD_NEW_VALUE = 'ADD_NEW_VALUE';
const ERROR = 'ERROR';


const game = (state = INIT, action) => {
  if (action.type === ADD_GAME) return action.payload;
  if (action.type === ADD_NEW_VALUE) return action.payload;
  if (action.type === ERROR) return { status: ERROR, message: action.payload};
  return state;
};

export default game;
