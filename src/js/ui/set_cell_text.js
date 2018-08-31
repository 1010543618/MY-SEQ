import chessboard_info from "../data/chessboard_info";

export default ($cell) => {
  chessboard_info.forEach((d, i) => {
    i *= 8;
    d.forEach((d, j) => {
      d && $cell.eq(i + j).html(`${d.pos}<br>${d.coo}`);
    })
  })
}