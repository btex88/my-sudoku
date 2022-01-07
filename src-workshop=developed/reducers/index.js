import { combineReducers } from 'redux';
import user from './user';
import game from './game';
import buttonStatus from './button-status';

const rootReducer = combineReducers({user, buttonStatus, game});

export default rootReducer;

