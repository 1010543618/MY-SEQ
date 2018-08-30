import get_eight_directions from "./utils/get_eight_directions";
import directions from "./data/directions_info";
import reverse_chess_piece from "./utils/reverse_chess_piece";

export default (chessboard, vacancy, chess_piece_type) => {
  var eight_directions = [],
    i = vacancy[0],
    j = vacancy[1];

  if (chessboard[i][j] !== 0) {
    console.error("已经落子");
    return;
  }

  // 对每个位置广度优先搜索
  var eight_directions = get_eight_directions(chessboard, i, j, chess_piece_type);
  for (let boom = 2; boom < 8; boom++) {
    if (eight_directions.every(d => {
        return d === false;
      })) {

      return;
    }
    for (let d_index = 0; d_index < eight_directions.length; d_index++) {
      const d = eight_directions[d_index];
      if (d) {
        var i2 = i + boom * directions[d_index][0],
          j2 = j + boom * directions[d_index][1];
        if ((i2 < 0 || i2 > 7) || (j2 < 0 || j2 > 7) || chessboard[i2][j2] == 0) {
          eight_directions[d_index] = false;
          continue;
        }
        if (chessboard[i2][j2] == chess_piece_type) {
          chessboard[i][j] = chess_piece_type;
          reverse_chess_piece(chessboard, [i, j], d_index, boom - 1);
          eight_directions[d_index] = false;
        }
      }
    }
  }
}