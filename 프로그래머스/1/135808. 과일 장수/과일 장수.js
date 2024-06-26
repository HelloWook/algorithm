function solution(k, m, score) {
  score = score.filter((x) => x <= k).sort((a, b) => b - a);
  let result = 0;
  for (let i = m - 1; i < score.length; i += m) {
    result += score[i] * m;
  }
  return result;
}
