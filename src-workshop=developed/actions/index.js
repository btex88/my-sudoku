const ADD_USER = 'ADD_USER';
const ADD_NAME = 'ADD_NAME';
const ADD_GAME = 'ADD_GAME';
const ADD_EMAIL = 'ADD_EMAIL';
const ENABLE_BUTTON = 'ENABLE_BUTTON';
const DISABLE_BUTTON = 'DISABLE_BUTTON';
const ERROR = 'ERROR';

const enableButton = () => ({ type: ENABLE_BUTTON });
const disableButton = () => ({ type: DISABLE_BUTTON });
const addGame = (game) => ({ type: ADD_GAME, payload: game });
const addUser = (myUser) => ({ type: ADD_USER, payload: myUser });
const addName = (name) => ({ type: ADD_NAME, payload: name });
const addEmail = (email) => ({ type: ADD_EMAIL, payload: email });
const fetchError = (error) => ({ type: ERROR, payload: error });

export { addUser, addName, addEmail, enableButton, disableButton, addGame, fetchError };

