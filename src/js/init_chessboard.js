/**
 * initial_state 0:正向，1：反向
 */
export default (initial_state) => {
  // 0未下，1百，-1黑
  var chessboard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  switch (initial_state) {
    case 0:
      chessboard[3][3] = 1;
      chessboard[3][4] = -1;
      chessboard[4][3] = -1;
      chessboard[4][4] = 1;
      break;
    case 1:
      chessboard[3][3] = -1;
      chessboard[3][4] = 1;
      chessboard[4][3] = 1;
      chessboard[4][4] = -1;
      break;
  }

  return chessboard;
}