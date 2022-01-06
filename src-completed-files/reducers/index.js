import { combineReducers } from 'redux';
import user from './user';
import buttonStatus from './button-status';
import game from './game';
import selectedNumber from './selected-number';
import savedGame from './solved-game';

const rootReducer = combineReducers({
  user,
  buttonStatus,
  game,
  selectedNumber,
  savedGame,
});

export default rootReducer;
