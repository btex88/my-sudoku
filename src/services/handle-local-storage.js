const local = {
  set: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  get: (key) => JSON.parse(localStorage.getItem(key)),
};

export default local;
