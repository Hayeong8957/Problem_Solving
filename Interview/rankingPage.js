// 1. 점수가 높은 유저의 랭킹이 더 높다.
// 2. 점수가 같다면 해당 점수를 먼저 달성한 유저의 랭킹이 높다.
// 3. 어떤 유저가 이전 기록보다 더 높은 점수를 달성하면, 이전 기록은 사라지고 새로운 기록이 랭킹에 반영된다.
// 4. 어떤 유저가 이전 기록보다 더 낮거나 같은 점수를 달성했다면 이 기록은 무시한다.
// 5. 랭킹 페이지에는 유저 닉네임만 표시되므로 점수 변화가 있더라도 랭킹에 변화가 없다면 랭킹 페이지는 바뀌지 않는다.

// 한 페이지에 표시되는 닉네임수 K, 유저의 닉네임과 점수가 달성 순서대로 들어있는 배열 user_scores가 매개변수로 주어질 떄, 랭킹 페이지는 몇 번 바뀌는지 return 하는 solution 함수를 완성하라.

// K : 3, user_scores: ["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"] => result: 4

// 1. userBestScore Map객체 생성 -> username 키값 존재하고, 해당 값이 new score보다 작으면 값 갱신
// 2. userBestScore Map 객체를 배열로 만들어 sort함수 -> [{name, value},{name, value},{name, value},...]형태로 만듦
// 3. sort함수 -> value값이 같지 않다면 value값 기준으로 내림차순, value값이 같다면 먼저 들어간 순서대로 오름차순(여기서 원본 배열의 index를 활용)
// 4. 3번을 통해 정렬된 배열을 0~3 slice해줘서 새 배열에 넣어줌
// 5. 기존 temp에 newRanking 넣어주고, 매번 temp와 newRanking을 비교해서 달라지면 ++해주는데 비교하는 함수 따로 만듦

function solution(K, user_scores) {
  const userBestScore = new Map();
  let rankingList = [];
  let temp = [];
  let cnt = 0;

  for (let x of user_scores) {
    const [name, score] = x.split(' ');
    const newScore = parseInt(score);

    if (!userBestScore.has(name) || userBestScore.get(name) < newScore) {
      userBestScore.set(name, newScore);

      rankingList = Array.from(userBestScore, ([name, value]) => ({
        name,
        value,
      }));

      let sortedRankingList = rankingList.sort((a, b) => {
        if (a.value !== b.value) {
          return b.value - a.value;
        } else {
          return (
            user_scores.findIndex((i) => i === a.name + ' ' + a.value) -
            user_scores.findIndex((j) => j === b.name + ' ' + b.value)
          );
        }
      });

      const sliceRankingTop3 = sortedRankingList.slice(0, K).map((x) => x.name);
      if (!isEqual(sliceRankingTop3, temp)) {
        cnt++;
        temp = sliceRankingTop3;
      }
    }
  }
  return cnt;
}

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(
  solution(3, [
    'alex111 100',
    'cheries2 200',
    'coco 150',
    'luna 100',
    'alex111 120',
    'coco 300',
    'cheries2 110',
  ]),
);
