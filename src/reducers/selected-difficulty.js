const INIT = 'random';
const SELECT_DIFFICULTY = 'SELECT_DIFFICULTY';

const selectedDifficulty = (state = INIT, action) => {
  if (action.type === SELECT_DIFFICULTY) return action.payload;
  return state;
};

export default selectedDifficulty;
