import directions from "../data/directions_info"
export default (chessboard, vacancy, direction, num) => {
  var i = vacancy[0],
    j = vacancy[1],
    idir = directions[direction][0],
    jdir = directions[direction][1];
    
  for (let index = 0; index < num; index++) {
    chessboard[i + num * idir][j + num * jdir] = -chessboard[i + num * idir][j + num * jdir];
  }
}