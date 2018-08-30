import directions from "../data/directions_info"
export default (chessboard, vacancy, direction, num) => {
  var i = vacancy[0],
    j = vacancy[1],
    idir = directions[direction][0],
    jdir = directions[direction][1];

  for (let n = 1; n <= num; n++) {
    i = i + n * idir;
    j = j + n * jdir;
    chessboard[i][j] = -chessboard[i][j];
  }
}