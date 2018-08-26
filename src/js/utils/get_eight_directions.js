export default (chessboard, i, j, chess_piece_type) => {
  return [
    j - 1 > 0 && chessboard[i][j - 1] == -chess_piece_type,
    i + 1 < 8 && j - 1 > 0 && chessboard[i + 1][j - 1] == -chess_piece_type,
    i + 1 < 8 && chessboard[i + 1][j] == -chess_piece_type,
    i + 1 < 8 && j + 1 < 8 && chessboard[i + 1][j + 1] == -chess_piece_type,
    j + 1 < 8 && chessboard[i][j + 1] == -chess_piece_type,
    i - 1 > 0 && j + 1 < 8 && chessboard[i - 1][j + 1] == -chess_piece_type,
    i - 1 > 0 && chessboard[i - 1][j] == -chess_piece_type,
    i - 1 > 0 && j - 1 > 0 && chessboard[i - 1][j - 1] == -chess_piece_type,
  ];
}