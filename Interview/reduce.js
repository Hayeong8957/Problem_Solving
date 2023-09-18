// interface IHuman {
//   name: string;
//   age: number;
//   distinct: string;
// }

const humanList = [
  {
    name: '신하영',
    age: 25,
    distinct: '고양시',
  },
  {
    name: '고민시',
    age: 23,
    distinct: '서울시',
  },
  {
    name: '안유진',
    age: 22,
    distinct: '안양시',
  },
];

// const resultList = {
//   고양시: [
//     {
//       name: '신하영',
//       age: 25,
//       distinct: '고양시',
//     },
//   ],
//   서울시: [
//     {
//       name: '고민시',
//       age: 23,
//       distinct: '서울시',
//     },
//   ],
//   안양시: [
//     {
//       name: '안유진',
//       age: 22,
//       distinct: '안양시',
//     },
//   ],
// };

// TypeScript ver.
// function groupByDistinct(humanList: IHuman[]): { [key: string]: IHuman[] } {
//   return humanList.reduce((acc, human) => {
//     if (!acc[human.distinct]) {
//       acc[human.distinct] = [];
//     }
//     acc[human.distinct].push(human);
//     return acc;
//   }, {} as { [key: string]: IHuman[] });
// }

// JavaScript ver.  ----> reduce 연습
// reduce는 임의의 자료구조를 return하는 것, map의 제너럴한 ver.
function groupByDistinct(humanList) {
  // acc -> 누적값, human -> 현재 요소
  return humanList.reduce((acc, human) => {
    // 현재 human객체의 distinct프로퍼티 값이 누적 객체에 존재하는 키인지 확인
    if (!acc[human.distinct]) {
      acc[human.distinct] = []; // 해당키 존재하지 않으면 새 배열 생성해서 해당 키에 할당
    }
    acc[human.distinct].push(human); // 해당키 존재 시 해당 키에 요소 추가
    return acc; // 누적 객체 반환
  }, {});
}

console.log(groupByDistinct(humanList));
