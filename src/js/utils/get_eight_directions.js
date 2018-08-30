import directions_info from "../data/directions_info";

export default (chessboard, i, j, chess_piece_type) => {
  return directions_info.map(d => {
    var i2 = i + d[0],
      j2 = j + d[1];
    return !(i2 < 0 || i2 > 7) &&
      !(j2 < 0 || j2 > 7) &&
      chessboard[i2][j2] == -chess_piece_type;
  });
}