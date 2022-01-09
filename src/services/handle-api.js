import * as ACT from '../actions';

// API endpoints for each level of difficulty.
const url = {
  easy: 'https://sugoku.herokuapp.com/board?difficulty=easy',
  medium: 'https://sugoku.herokuapp.com/board?difficulty=medium',
  hard: 'https://sugoku.herokuapp.com/board?difficulty=hard',
  random: 'https://sugoku.herokuapp.com/board?difficulty=random',
};

// Function to return the fetched game (Thunked).
const getAPI = (value = 'random') =>
  (dispatch) =>
    fetch(url[value])
      .then((response) => response.json())
      .then((data) => dispatch(ACT.addGame(data.board)))
      .catch((error) => dispatch(ACT.fetchError(error)));

// Function to encode the board.
const encodeBoard = (board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`,
    '',
  );

// Function to handle the encoded board into a POST method.
const encodeParams = (params) =>
  Object.keys(params)
    .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');

// Function to return the solved game (Thunked).
const solveGame = (data) => (dispatch) =>
  fetch('https://sugoku.herokuapp.com/solve', {
    method: 'POST',
    body: encodeParams(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
    .then((response) => response.json())
    .then((data) => dispatch(ACT.addSolvedGame(data)))
    .catch((error) => dispatch(ACT.fetchError(error)));

export { solveGame, getAPI, url };
