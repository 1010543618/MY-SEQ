export default (weightboard, vacancies) => {
  var best_vacancies = [],
    max_weight;
  if (vacancies.length) {
    best_vacancies = vacancies[0];
    max_weight = weightboard[vacancies[0][0]][vacancies[0][1]];
    vacancies.forEach((d, i) => {
      if (weightboard[d[0]][d[1]] > max_weight) {
        best_vacancies = vacancies[i];
        max_weight = weightboard[best_vacancies[0]][best_vacancies[1]];
      }
    });
  } else {
    console.error("无可落子区域")
  }
  return best_vacancies;
}