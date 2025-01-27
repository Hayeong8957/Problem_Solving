// 가장 많이 받은 선물
function solution(friends, gifts) {
  const sentGifts = {}; // 준 선물 기록
  const receivedGifts = {}; // 받은 선물 기록
  const nextMonthGifts = {}; // 다음 달에 받을 선물 기록

  // 초기화
  friends.forEach((friend) => {
    sentGifts[friend] = 0;
    receivedGifts[friend] = 0;
    nextMonthGifts[friend] = 0;
  });

  console.log(friends);

  // 주고 받은 선물 기록
  gifts.forEach((record) => {
    const [giver, receiver] = record.split(' ');
    sentGifts[giver]++;
    receivedGifts[receiver]++;
  });
  console.log(gifts);

  // 선물 지수 계산
  const giftIndex = {};
  friends.forEach((friend) => {
    giftIndex[friend] = sentGifts[friend] - receivedGifts[friend];
  });

  // 다음달 선물 예측
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const friendA = friends[i];
      const friendB = friends[j];

      // 두 친구의 주고받은 횟수
      const aToB = gifts.filter(
        (gift) => gift === `${friendA} ${friendB}`,
      ).length;
      const bToA = gifts.filter(
        (gift) => gift === `${friendB} ${friendA}`,
      ).length;

      if (aToB > bToA) {
        nextMonthGifts[friendA]++;
      } else if (bToA > aToB) {
        nextMonthGifts[friendB]++;
      } else {
        // 주고받은 횟수가 동일할 경우, 선물 지수를 비교
        if (giftIndex[friendA] > giftIndex[friendB]) {
          nextMonthGifts[friendA]++;
        } else if (giftIndex[friendA] < giftIndex[friendB]) {
          nextMonthGifts[friendB]++;
        }
      }
    }
  }
  return Math.max(...Object.values(nextMonthGifts));
}
