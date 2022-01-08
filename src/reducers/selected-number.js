const INIT = '';
const SELECT_NUMBER = 'SELECT_NUMBER';

const selectedNumber = (state = INIT, action) => {
  if (action.type === SELECT_NUMBER) return action.payload;
  return state;
};

export default selectedNumber;
