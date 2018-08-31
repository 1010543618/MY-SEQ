import get_vacancies from '../get_vacancies'
export default ($cell, chessboard) => {
  chessboard.forEach((d, i) => {
    i *= 8;
    d.forEach((d, j) => {
      var $c = $cell.eq(i + j);
      switch (d) {
        case 1:
          $c.removeClass('cp-black').addClass('cp-white')
          break;
        case -1:
          $c.removeClass('cp-white').addClass('cp-black')
          break;
        default:
          $c.removeClass('cp-white cp-black');
          break;
      }
    });
  });

  var vacancies = get_vacancies(chessboard, -1);
  $cell.removeClass("vacancy-can-put");
  vacancies.forEach(d => {
    $cell.eq(d[0] * 8 + d[1]).addClass("vacancy-can-put");
  })
}