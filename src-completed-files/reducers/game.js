const INIT = [];
const ADD_GAME = 'ADD_GAME';
const ADD_NEW_VALUE = 'ADD_NEW_VALUE';

const game = (state = INIT, action) => {
  if (action.type === ADD_GAME) return action.payload;
  if (action.type === ADD_NEW_VALUE) return action.payload;
  return state;
};

export default game;
