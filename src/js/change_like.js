import conifg from "./conifg";

// type: set, unset
export default (vacancy, weightboard, type) => {
  var i = vacancy[0],
    j = vacancy[1];

  weightboard[i][j] += (type == 'set' ? conifg.chest.like : -conifg.chest.like);
}