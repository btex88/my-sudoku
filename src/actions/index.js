const ADD_EMAIL = 'ADD_EMAIL';
const ADD_GAME = 'ADD_GAME';
const ADD_NAME = 'ADD_NAME';
const DISABLE_BUTTON = 'DISABLE_BUTTON';
const ENABLE_BUTTON = 'ENABLE_BUTTON';
const RESET_NUMBER = 'RESET_NUMBER';
const SELECT_NUMBER = 'SELECT_NUMBER';
const ADD_NEW_VALUE = 'ADD_NEW_VALUE';
const ADD_SOLVED_GAME = 'ADD_SOLVED_GAME';
const ERROR = 'ERROR';

const addEmail = (email) => ({ type: ADD_EMAIL, payload: email });
const addGame = (game) => ({ type: ADD_GAME, payload: game });
const addSolvedGame = (game) => ({ type: ADD_SOLVED_GAME, payload: game });
const addNewValue = (value) => ({ type: ADD_NEW_VALUE, payload: value });
const addName = (name) => ({ type: ADD_NAME, payload: name });
const disableButton = () => ({ type: DISABLE_BUTTON });
const enableButton = () => ({ type: ENABLE_BUTTON });
const resetNumber = () => ({ type: RESET_NUMBER });
const selectNumber = (num) => ({ type: SELECT_NUMBER, payload: num });
const fetchError = (error) => ({ type: ERROR, payload: error });

export {
  addEmail,
  addGame,
  addNewValue,
  addName,
  addSolvedGame,
  disableButton,
  enableButton,
  resetNumber,
  selectNumber,
  fetchError,
};
