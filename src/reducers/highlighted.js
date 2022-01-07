const INIT = '';
const HIGHLIGHT = 'HIGHLIGHT';
const PLAY_DOWN = 'PLAY_DOWN';

const highlighted = (state = INIT, action) => {
  if (action.type === HIGHLIGHT) return action.payload;
  if (action.type === PLAY_DOWN) return INIT;
  return state;
};

export default highlighted;
