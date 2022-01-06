const INIT = '';
const SELECT_NUMBER = 'SELECT_NUMBER'
const RESET_NUMBER = 'RESET_NUMBER'

const selectedNumber = (state = INIT, action) => {
  if (action.type === SELECT_NUMBER) return action.payload;
  if (action.type === RESET_NUMBER) return INIT;
  return state;
};

export default selectedNumber;
