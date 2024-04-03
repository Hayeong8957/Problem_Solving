// 전화번호 목록
function solution(phone_book) {
  let dict = {};

  phone_book.forEach((item) => {
    dict[item] = true;
  });

  for (const phoneNum of phone_book) {
    for (let i = 0; i < phoneNum.length; i++) {
      const temp = phoneNum.slice(0, i);
      if (dict[temp]) return false;
    }
  }

  return true;
}
