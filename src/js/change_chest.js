import conifg from "./conifg";
import directions_info from "./data/directions_info";

// type: set, unset
export default (vacancy, weightboard, type) => {
  var i = vacancy[0],
    j = vacancy[1];

  weightboard[i][j] += type == 'set' ? conifg.chest.add : -conifg.chest.add;

  directions_info.forEach(d => {
    var i2 = i + d[0],
      j2 = j + d[1];
    if (!(i2 < 0 || i2 > 7) && !(j2 < 0 || j2 > 7))
      weightboard[i2][j2] += type == 'set' ? conifg.chest.sub : -conifg.chest.sub;
  });
}