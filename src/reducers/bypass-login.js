const INIT = false;
const BYPASS = 'BYPASS';
const SUBMIT = 'SUBMIT';

const bypassLogin = (state = INIT, action) => {
  if (action.type === BYPASS) return true;
  if (action.type === SUBMIT) return INIT;
  return state;
};

export default bypassLogin;
