import chessboard_info from "./data/chessboard_info";

export default () => {
  var weightboard = [];
  chessboard_info.forEach((r, i) => {
    weightboard[i] = [];
    r.forEach((d, j) => {
      if (d !== null)
        weightboard[i][j] = d.weight;
    })
  })

  return weightboard;
}