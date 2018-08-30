import $ from 'jquery/dist/jquery';

import init_chessboard from './init_chessboard';
import init_weightboard from './init_weightboard';
import set_chessboard_ui from './ui/set_chessboard_ui';
import put_chess_piece from './put_chess_piece';
import get_best_vacancy from './get_best_vacancy';
import get_vacancies from './get_vacancies';
export default $(()=>{
  var chessboard = init_chessboard(0),
    weightboard = init_weightboard(),
    $chessboard = $('#chessboard');

  put_chess_piece(chessboard, get_best_vacancy(weightboard, get_vacancies(chessboard, 1)), 1);
  set_chessboard_ui($chessboard, chessboard);

  $chessboard.on("click", "> div", (e)=>{
    var cur = e.currentTarget,
      i = +cur.dataset.i,// "+" = Number()
      j = +cur.dataset.j;
    
    $(cur).addClass("cp_black");
    put_chess_piece(chessboard, [i, j], -1);
    set_chessboard_ui($chessboard, chessboard);
    put_chess_piece(chessboard, get_best_vacancy(weightboard, get_vacancies(chessboard, 1)), 1);
    set_chessboard_ui($chessboard, chessboard);

  })

})