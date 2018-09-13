import $ from 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle'

import init_chessboard from './init_chessboard';
import init_weightboard from './init_weightboard';
import set_chessboard_ui from './ui/set_chessboard_ui';
import set_cell_text from './ui/set_cell_text';
import put_chess_piece from './put_chess_piece';
import get_best_vacancy from './get_best_vacancy';
import get_vacancies from './get_vacancies';
import change_chest from './change_chest';
import change_like from './change_like';
import change_dislike from './change_dislike';

export default $(() => {
  var chessboard = init_chessboard(0),
    weightboard = init_weightboard(),
    $chessboard = $('#chessboard'),
    $cell = $chessboard.find('> div');

  set_cell_text($cell);

  _put_white_cp();

  $chessboard.on("click", "> div", (e) => {
    var cur = e.currentTarget,
      i = +cur.dataset.i, // "+" = Number()
      j = +cur.dataset.j;

    switch (window.CUR_TYPE) {
      case "chests":
        if ($(cur).hasClass('vacancy-chests')) {
          change_chest([i, j], weightboard, 'unset')
        } else {
          change_chest([i, j], weightboard, 'set')
        }
        $(cur).toggleClass('vacancy-chests');
        break;
      case "like":
        if ($(cur).hasClass('vacancy-like')) {
          change_like([i, j], weightboard, 'unset')
        } else {
          change_like([i, j], weightboard, 'set')
        }
        $(cur).toggleClass('vacancy-like');
        break;
      case "dislike":
        if ($(cur).hasClass('vacancy-dislike')) {
          change_dislike([i, j], weightboard, 'unset')
        } else {
          change_dislike([i, j], weightboard, 'set')
        }
        $(cur).toggleClass('vacancy-dislike');
        break;
      case "1":
        $(cur).addClass('cp-white').removeClass('cp-black');
        chessboard[i][j] = 1;
        break;
      case "-1":
        $(cur).addClass('cp-black').removeClass('cp-white');
        chessboard[i][j] = -1;
        break;
      case "0":
        $(cur).removeClass('cp-white cp-black');
        chessboard[i][j] = 0;
        break;
      default:
        if ($(cur).hasClass('vacancy-can-put')) {
          put_chess_piece(chessboard, [i, j], -1);
          _put_white_cp();
        }
    }
    console.log(weightboard);

  })

  $('input[type=radio][name=opening]').change((e) => {
    var cur = e.currentTarget,
      type = +cur.dataset.type;

    chessboard = init_chessboard(type);

    _put_white_cp();
  })

  $('button[name=setting]').click((e) => {
    var cur = e.currentTarget,
      type = cur.dataset.type;
    if ($(cur).hasClass('active')) {
      $(cur).removeClass('active');
      window.CUR_TYPE = null;
    } else {
      $(cur).addClass('active').siblings().removeClass('active');
      window.CUR_TYPE = type;
    }
  })

  $('button[name=cb-setting]').click((e) => {
    var cur = e.currentTarget,
      type = cur.dataset.type;

    $cell.removeClass("vacancy-can-put cp-cur");
    $(cur).addClass('active').siblings().removeClass('active');
    window.CUR_TYPE = type;
  })

  $('#finish-cb-setting').click((e) => {
    $('button[name=cb-setting]').removeClass('active');
    window.CUR_TYPE = null;
    _put_white_cp();
  })

  function _put_white_cp() {
    var best_vacancy = get_best_vacancy(weightboard, get_vacancies(chessboard, 1))
    put_chess_piece(chessboard, best_vacancy, 1);
    $cell.removeClass("cp-cur").eq(best_vacancy[0] * 8 + best_vacancy[1]).addClass("cp-cur");
    set_chessboard_ui($cell, chessboard);
  }
})