/**
 * 문제 번호: 1000
 * 문제:
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성.
 *
 * 입력:
 * 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
 *
 * 출력:
 * 첫째 줄에 A+B를 출력한다.
 *
 * 문제 풀이:
 * 1. fs모듈(file system모듈을 불러온다.)
 * 2. fs모듈의 readFileSync함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
 * 3. 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
 * 4. 읽어들인 정보는 toString() 함수를 통해 문자여롤 변환하여야 사용할 수 있다.
 * 5. 입력 받은 문자열을 Split() 함수를 통해 배열화한다. (split(''), split('\n') 등)
 *    예) 2 3 입력 시, inputData = ['2', '3']
 * 6. options으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환
 */

const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
