const INIT = false;
const ENABLE_BUTTON = 'ENABLE_BUTTON';
const DISABLE_BUTTON = 'DISABLE_BUTTON';

const buttonStatus = (state = INIT, action) => {
  if (action.type === ENABLE_BUTTON) return true;
  if (action.type === DISABLE_BUTTON) return INIT;
  return state;
};

export default buttonStatus;
