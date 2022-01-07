import { combineReducers } from 'redux';
import user from './user';
import buttonStatus from './button-status';
import game from './game';
import selectedNumber from './selected-number';
import solvedGame from './solved-game';
import highlighted from './highlighted';

const rootReducer = combineReducers({
  user,
  buttonStatus,
  game,
  selectedNumber,
  solvedGame,
  highlighted,
});

export default rootReducer;
