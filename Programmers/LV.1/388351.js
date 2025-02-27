function solution(schedules, timelogs, startday) {
  let answer = 0;

  function calcMinutes(time, minutesToAdd) {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
    minute += minutesToAdd;
    hour += Math.floor(minute / 60);
    minute = minute % 60;
    return hour * 100 + minute;
  }

  const totalDays = 7;

  for (let i = 0; i < schedules.length; i++) {
    const schedulesTime = schedules[i];
    const deadline = calcMinutes(schedulesTime, 10);
    let onTimeAllWeekDays = true;

    for (let d = 0; d < totalDays; d++) {
      // 1: 월요일, 2: 화요일, ...
      const dayofWeek = ((startday - 1 + d) % 7) + 1;
      if (dayofWeek >= 1 && dayofWeek <= 5) {
        if (timelogs[i][d] > deadline) {
          onTimeAllWeekDays = false;
          break;
        }
      }
    }
    if (onTimeAllWeekDays) {
      answer++;
    }
  }

  return answer;
}
