const INIT = { name: '', email: '' };
const ADD_NAME = 'ADD_NAME';
const ADD_EMAIL = 'ADD_EMAIL';

const user = (state = INIT, action) => {
  if (action.type === ADD_NAME) return { ...state, name: action.payload };
  if (action.type === ADD_EMAIL) return { ...state, email: action.payload };
  return state;
};

export default user;
