export default ($chessboard, chessboard) => {
  var $cps = $chessboard.find('> div');
  chessboard.forEach((d, i) => {
    i *= 8;
    d.forEach((d, j) => {
      var $cp = $cps.eq(i + j);
      switch (d) {
        case 1:
          $cp.removeClass('cp_black').addClass('cp_white')
          break;
        case -1:
          $cp.removeClass('cp_white').addClass('cp_black')
          break;
        default:
          $cp.removeClass('cp_white cp_black');
          break;
      }
    });
  });
}