import get_eight_directions from "./utils/get_eight_directions";
import directions from "./data/directions_info";

export default (chessboard, chess_piece_type) => {
  var vacancies = [];
  chessboard.forEach((r, i) => {
    each_position: for (let j = 0; j < r.length; j++) {
      const d = r[j];

      // 已经落子
      if (d) continue;

      // 对每个位置广度优先搜索
      var eight_directions = get_eight_directions(chessboard, i, j, 1);
      for (let boom = 2; boom < 8; boom++) {
        if (eight_directions.every(d => {
            return d === false;
          })) {
          continue each_position;
        }
        for (let d_index = 0; d_index < eight_directions.length; d_index++) {
          const d = eight_directions[d_index];
          if(d){
            var i2 = i + boom * directions[d_index][0],
              j2 = j + boom * directions[d_index][1];
            if (!(i2 > 0 && i2 < 8) || !(j2 > 0 && j2 < 8) || chessboard[i2][j2] == 0) {
              eight_directions[d_index] = false;
            }
            if (chessboard[i2][j2] == chess_piece_type) {
              vacancies.push([i, j]);
              continue each_position;
            }
          }
        }
      }
    }
  });
  return vacancies;
}