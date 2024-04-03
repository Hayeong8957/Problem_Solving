function solution(s) {
  let check = 0;
  if (s[0] === ')') return false;

  s.split('').forEach((item, index) => {
    if (check < 0) return false;
    item === '(' ? (check += 1) : (check -= 1);
  });

  return check === 0 ? true : false;
}
