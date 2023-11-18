// 폰켓몬
function solution(nums) {
  let map = new Map();
  for (let x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  let mapList = Array.from(map, ([key, value]) => ({ key, value }));
  return Math.min(nums.length / 2, mapList.length);
}
