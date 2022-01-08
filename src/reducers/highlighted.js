const INIT = '';
const HIGHLIGHT = 'HIGHLIGHT';

const highlighted = (state = INIT, action) => {
  if (action.type === HIGHLIGHT) return action.payload;
  return state;
};

export default highlighted;
