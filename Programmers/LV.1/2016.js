// 2016년 a월 b일의 요일을 구해라
// 2016년은 윤년, 윤년은 2월 29일까지 있고 1년이 366일
// 1. 100의 배수가 아니면서 4의 배수이다.
// 2. 400의 배수이다.
// ['SUN','MON','TUE','WED','THU','FRI','SAT']

function solution(a, b) {
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay(); // 일~토, 0~6
  return weekDays[day];
}
