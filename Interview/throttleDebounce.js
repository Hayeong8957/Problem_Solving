// throttle -> 일정 시간 동안 이벤드 핸들러를 한 번만 실행하도록 제어
// 
let throttleTimer; 
// -> setTimeout에서 반환된 타이머 ID를 저장하여
// 다음에 함수가 호출될 때 이전 타이머가 아직 존재하는지 확인

function throttle(func, delay) {
  if(throttleTimer) { // 타이머 id가 존재하면 함수 끝
    return;
  }

 throttleTimer = setTimeout(() => {
    func();
    throttleTimer = null; // 타이머 종료 나타냄
  }, delay);

  return throttleTimer;
}

// debounce -> 마지막 이벤트 기준 일정 시간 지나면 이벤트를 1번만 발생
let debounceTimer;

function debounce(func, delay) {
  clearTimeout(debounceTimer); 
  // -> debounceTimer에 저장된 이전 타이머 취소
  // 새로운 타이머 설정을 통해 func함수의 호출이 지연
  // 연속적 이벤트 발생 시 마지막 이벤트 후에만 함수 호출

  debounceTimer = setTimeout(func, delay);
}