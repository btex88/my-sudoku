const ADD_EMAIL = 'ADD_EMAIL';
const ADD_GAME = 'ADD_GAME';
const ADD_NAME = 'ADD_NAME';
const ADD_NEW_VALUE = 'ADD_NEW_VALUE';
const ADD_SOLVED_GAME = 'ADD_SOLVED_GAME';
const BYPASS = 'BYPASS';
const DISABLE_BUTTON = 'DISABLE_BUTTON';
const ENABLE_BUTTON = 'ENABLE_BUTTON';
const ERROR = 'ERROR';
const HIGHLIGHT = 'HIGHLIGHT';
const SELECT_NUMBER = 'SELECT_NUMBER';
const SUBMIT = 'SUBMIT';
const SELECT_DIFFICULTY = 'SELECT_DIFFICULTY';

const addEmail = (payload) => ({ type: ADD_EMAIL, payload });
const addGame = (payload) => ({ type: ADD_GAME, payload });
const addName = (payload) => ({ type: ADD_NAME, payload });
const addNewValue = (payload) => ({ type: ADD_NEW_VALUE, payload });
const addSolvedGame = (payload) => ({ type: ADD_SOLVED_GAME, payload });
const bypass = () => ({ type: BYPASS });
const disableButton = () => ({ type: DISABLE_BUTTON });
const enableButton = () => ({ type: ENABLE_BUTTON });
const fetchError = (payload) => ({ type: ERROR, payload });
const heighlightNum = (payload = '') => ({ type: HIGHLIGHT, payload });
const selectNumber = (payload = '') => ({ type: SELECT_NUMBER, payload });
const submit = () => ({ type: SUBMIT });
const selectDifficulty = (payload) => ({ type: SELECT_DIFFICULTY, payload});

export {
  addEmail,
  addGame,
  addName,
  addNewValue,
  addSolvedGame,
  bypass,
  disableButton,
  enableButton,
  fetchError,
  heighlightNum,
  selectNumber,
  submit,
  selectDifficulty,
};
