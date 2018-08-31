import directions from "../data/directions_info"
export default (chessboard, vacancy, direction, num) => {
  var i = vacancy[0],
    j = vacancy[1],
    idir = directions[direction][0],
    jdir = directions[direction][1];

  for (let n = 1; n <= num; n++) {
    var ci = i + n * idir,
      cj = j + n * jdir;
    chessboard[ci][cj] = -chessboard[ci][cj];
  }
}