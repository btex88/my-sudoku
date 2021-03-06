import { combineReducers } from 'redux';
import user from './user';
import buttonStatus from './button-status';
import game from './game';
import selectedNumber from './selected-number';
import solvedGame from './solved-game';
import highlighted from './highlighted';
import bypassLogin from './bypass-login';
import selectedDifficulty from './selected-difficulty';

const rootReducer = combineReducers({
  user,
  buttonStatus,
  game,
  selectedNumber,
  solvedGame,
  highlighted,
  bypassLogin,
  selectedDifficulty,
});

export default rootReducer;
