# 백준 Node.js 입출력

[참고: https://velog.io/@hjkdw95/%EB%B0%B1%EC%A4%80-Node.js-%EC%9E%85%EC%B6%9C%EB%A0%A5-%EC%A0%95%EB%A6%AC]

## readline 모듈

- readline 모듈은 JS 내장 모듈
- 한 번에 한 줄씩 `Readable 스트림`(ex: `process.stdin`)에서
  데이터를 읽기 위한 인터페이스를 제공

1. 처음 생성 시 `createInterface`를 통해 `input`, `output` 설정
2. 다음에, 입력을 갖고 처리할 callback함수인 `function(line)`을 설정

```
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    console.log(line);

    // 입력 값을 처리할 callback 내용 기재

    rl.close();
}).on("close", function() {

    // 출력과 관련된 내용 기재 ( ex. `console.log`)

    process.exit();
});
```

- 매개변수 `line`에 할당되는 내용이 입력값(<strong>문자열로 할당</strong>)

### close()

- 입력을 원하는 만큼 받기 위해선 원하는 조건을 입력한 후, `rl.close()` 를 기재
- `rl.close()`는 입력을 멈추는 기능

```
const realine = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;

rl.on('line', (input) => {
    console.log(`Recived : ${input}`);
    count += 1;
    if (count === 3) {
        rl.close();
    }
});
```

---

## fs 모듈

- fs 모듈은 `FileSystem`의 약자로 파일 처리와 관련된 모듈이다.

### readFile()

```
fs.readFile(filename, [options], callback)
```

filename의 파일을 `[options]`의 방식으로 읽은 후 callback으로 전달된 함수를 호출(비동기적)

### readFileSync()

```
fs.readFileSync(filename, [options])
```

filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환(동기적)

- Sync가 붙은 것은 <strong>동기적 읽기</strong>, 붙지 않은 것은 <strong>비동기적 읽기</strong>
- 동기적으로 읽게 되면 파일을 읽으면서 다른 작업을 동시에 할 수 없다.
- 비동기적으로 읽으면 파일을 읽으면서 다른 작업도 동시에 수행할 수 있고,
  파일을 다 읽으면 매개변수 callback으로 전달한 함수가 호출된다.
- [options]에는 보통 인코딩 방식이 오게 되며 웹에서는 `utf8`을 주로 사용한다.

### 다앙한 예시

```
var fs = require("fs")
```

- 문자 하나만 입력받을 경우

```
var input = fs.readFileSync("/dev/stdin").toString()
```

- 한칸 띄어쓰기로 구분
  - input[0], input[1] 배열에서 꺼내쓰면 된다.

```
var input = fs.readFileSync("dev.stdin").toString().split(" ")
```

- 줄바꿈으로 구분

```
var input = fs.readFileSync("/dev/stdin").toString().split("\n")
```

- 만약 인풋값이 숫자라면

```
var input = fs.readFileSync("/dev/stdin").toString().split(" ")
  .map(function(a) {
    return +a
  })
```
