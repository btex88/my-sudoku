import * as ACT from '../actions';

// Function to return the fetched game.
export const getAPI = () => (dispatch) =>
  fetch('https://sugoku.herokuapp.com/board?difficulty=random')
    .then((response) => response.json())
    .then((data) => dispatch(ACT.addGame(data.board)))
    .catch((error) => dispatch(ACT.fetchError(error)));

// // Function to encode the board.
// const encodeBoard = (board) =>
//   board.reduce(
//     (result, row, i) =>
//       result +
//       `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`,
//     '',
//   );

// // Function to handle the encoded board into a POST method.
// const encodeParams = (params) =>
//   Object.keys(params)
//     .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
//     .join('&');

// // Function to return the solved game.
// export const solveGame = (data) => (dispatch) =>
//   fetch('https://sugoku.herokuapp.com/solve', {
//     method: 'POST',
//     body: encodeParams(data),
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   })
//     .then((response) => response.json())
//     .then((data) => dispatch(ACT.addSolvedGame(data)))
//     .catch((error) => dispatch(ACT.fetchError(error)));
