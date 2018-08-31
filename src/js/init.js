import $ from 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle'

import init_chessboard from './init_chessboard';
import init_weightboard from './init_weightboard';
import set_chessboard_ui from './ui/set_chessboard_ui';
import set_cell_text from './ui/set_cell_text';
import put_chess_piece from './put_chess_piece';
import get_best_vacancy from './get_best_vacancy';
import get_vacancies from './get_vacancies';

export default $(() => {
  var chessboard = init_chessboard(0),
    weightboard = init_weightboard(),
    $chessboard = $('#chessboard'),
    $cell = $chessboard.find('> div');

  set_cell_text($cell);

  var best_vacancy = get_best_vacancy(weightboard, get_vacancies(chessboard, 1))
  put_chess_piece(chessboard, best_vacancy, 1);
  $cell.removeClass("cp-cur").eq(best_vacancy[0] * 8 + best_vacancy[1]).addClass("cp-cur");
  set_chessboard_ui($cell, chessboard);


  $chessboard.on("click", "> div", (e) => {
    var cur = e.currentTarget,
      i = +cur.dataset.i, // "+" = Number()
      j = +cur.dataset.j;

    if ($(cur).hasClass('vacancy-can-put')) {
      put_chess_piece(chessboard, [i, j], -1);

      var best_vacancy = get_best_vacancy(weightboard, get_vacancies(chessboard, 1));
      put_chess_piece(chessboard, best_vacancy, 1);
      $cell.removeClass("cp-cur").eq(best_vacancy[0] * 8 + best_vacancy[1]).addClass("cp-cur");
      set_chessboard_ui($cell, chessboard);
    }

  })

  $('input[type=radio][name=opening]').change((e) => {
    var cur = e.currentTarget,
      type = +cur.dataset.type;

    chessboard = init_chessboard(type);

    var best_vacancy = get_best_vacancy(weightboard, get_vacancies(chessboard, 1))
    put_chess_piece(chessboard, best_vacancy, 1);
    $cell.removeClass("cp-cur").eq(best_vacancy[0] * 8 + best_vacancy[1]).addClass("cp-cur");
    set_chessboard_ui($cell, chessboard);
  })

})