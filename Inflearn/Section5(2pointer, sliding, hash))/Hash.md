# 해시(Hash)

![image](https://user-images.githubusercontent.com/70371342/224557363-53858568-b2a4-438a-8b74-dfb980d5544b.png)
ex) 전화번호부(이름-key, 번호-value), Hash가 없던 시절 -> 배열 for문 노가다 탐색 -> 시간 복잡도 개 털림

- **해시 함수(hash function)는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑**하는 함수, **해시 함수에 의해 얻어지는 값을 해시**라고 부른다.
- 해시 함수는 큰 파일에서 중복되는 레코드를 찾을 수 있기 때문에 **데이터 검색이나 테이블 검색의 속도를 가속**한다.
- 해시가 매우 빠르게 데이터 검색을 할 수 있는 이유는 **데이터를 검색할 때 사용할 key와 실제 데이터의 값(value)이 한 쌍으로 존재**하고, **key의 값이 배열의 인덱스로 변환되기 때문에 검색과 저장의 평균적인 시간 복잡도가 O(1)에 수렴**하게 된다.
- 해시 함수 과정에서 [해시충돌](https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8B%9C_%EC%B6%A9%EB%8F%8C)(서로 다른 두 개의 입력값에 대해 동일한 출력값을 내는 상황) 이 일어날 수 있다

### 언제 해시를 써야할까?

- **String을 기반으로 정보를 기록하고 관리해야 할 때**
  ex) 완주하지 못한 선수 문제 : 선수 이름(key;string) -> 완주 여부(value;boolean)

```javascript
const person = {};
person['firstName'] = 'Hayeong';
person['lastName'] = 'Shin';
```

이렇게 키와 값의 형태로 데이터를 저장하는 구조를 자바스크립트의 object나 map으로 구현할 수 있다.

# 해시 테이블(Hash Table)이란?

- 해시 함수를 활용해서 키 값에 인덱스를 배정하고, 인덱스의 값에 데이터를 넣는 자료 구조를 말한다. (ex. Array, Object)
- 배열에서는 key값에 숫자만 가능하지만, Hash Table에서는 문자열 또한 Key 가능, Map에서는 함수도 가능
- Hash Function을 통해 빠른 탐색이 가능 → **O(1)**
  ![image](https://user-images.githubusercontent.com/70371342/213849405-c60b3f5f-424d-462d-98f3-beaac0154f1d.png)
- JavaScript에서 해시 테이블은 대표적으로 Object, Map, Set이 있다.
- key-value로 이루어진 자료구조는 Object가 대표적이었지만, ES6에서 Map과 Set이 추가 되었다
[Map & Set 객체 설명 - Deep Dive](https://steep-agreement-07d.notion.site/CH37-Set-Map-1047efb4a4c1412aa84046f326336a3a)

> **💡 집합 개념인 Set도 해시 테이블의 일종이라 볼 수 있다. 
대신 Map과 가장 큰 차이점이라면 key-value가 동일한 값으로 저장된다는 점이다.**

# Map객체

- key-value로 이루어진 해시 테이블
- 탐색은 get(), 삽입은 set()으로 한다.
- key는 고유값으로써, 단 한 개만 존재
- key 가능 자료형 : number, string, function, object, NaN

## value 설정: set()

```javascript
let map = new Map();

let number = 0;
let str = 'string';
let obj = { a: 1 };
let fnc = () => {
  console.log('fnc');
};

map.set(number, 4); //key에 number 가능
map.set(str, 1); // key에 string 가능
map.set(obj, 2); //key에 object 가능
map.set(fnc, 3); // key에 함수 가능
map.set(number, 0); // 덮어쓰기 가능

console.log(map); // Map(4) {0 => 0, "string" => 1, {…} => 2, ƒ => 3}
```

## value 얻기: get()

```javascript
map.get(str); // 1
map.get(obj); // 2
map.get('none'); // undefined
map.get({ a: 1 }); // undefined, obj !== { a: 1 }
```

## value 찾기: has()

```javascript
map.has(str); // true
map.has(obj); // true
map.has('none'); // false
```

## value 삭제: delete()

```javascript
map.delete(str); // true
map.get('none'); // false
```

## value 존재유무: size

```javascript
map.size; // 4
map.length; // undefined
```

## hash 탐색: for~of 문

```javascript
//key, value 쌍으로 출력
for (let [key, value] of map) {
  console.log(key + ' = ' + value);
}

//key만 출력
for (let key of map.keys()) {
  console.log(key);
}

//value만 출력
for (let value of map.values()) {
  console.log(value);
}
```

# 추가) Hash Table생성, 해시 함수 작성, 충돌

## 1. Hash Table 생성하기

```javascript
class HashTable {
  table = new Array(100);
  setItem = (key, value) => {};
  getItem = (key) => {
    return '';
  };
}
```

table을 `table = [];`로 초기화해주지 않고 길이를 명시해 준 이유는 추후 특정 상황에서 길이를 늘리고자 함이다. (해시 충돌에 대응하기 위한 방법 중 하나다.)

setItem에서는 key, value를 파라미터로 받아서 table에 넣어주고,
getItem에서는 key를 파라미터로 받아 table의 key에 맞는 value를 불러온다.

```javascript
const newTable = new HashTable();
newTable.setItem('firstName', 'Hayeong');
newTable.getItem('firstName');

console.log(newTable.getItem('firstName')); // [empty string]
```

newTable을 생성자 함수로 만든 후 setItem으로 "firstName"키에 "Hayeong"값을 넣어주고, getItem으로 "firstName"키에 대한 값을 불러와 본다.
현재는 setItem에서 아무런 로직도 작성하지 않았기 때문에 firstName은 빈 문자열로 나온다.

```javascript
setItem = (key, value) => {
  table['firstName'] = 'Hayeong'; // 잘못된 예시
};
```

setItem은 key와 value쌍으로 데이터를 집어넣어 준다.
그런데 **array는 인덱스 숫자로만 접근할 수 있다.**
따라서 string값을 해시 테이블에 넣어주려면 **string 자료형을 number 자료형으로 바꾸어서 해당 number인덱스에 데이터를 저장하도록 해야 한다.**
이렇게 해시 테이블의 키를 number 자료형으로 만드는 어떤 함수를 **해시함수(Hash function)** 라고 한다.

## 2. 해시 함수가 필요한 이유

```javascript
function hashStringToInt(s) {
  return Number(s);
}
```

숫자 하나를 리턴하는 hashStringToInt 함수를 선언한다.

```javascript
setItem = (key, value) => {
  const idx = hashStringToInt(key);
  this.table[idx] = value;
};
```

그리고 setItem을 다음과 같이 작성한다. 이제 key로 어떤 string이 들어오든, hashStringToInt 함수를 통해 string이 number로 인덱스화해서 table에 값이 저장된다.

```javascript
getItem = (key) => {
  const idx = hashStringToInt(key);
  return this.table[idx];
};
```

getItem에서도 값을 가져오기 원하는 key를 해시 함수로 변환해서 table[3]의 값을 리턴하도록 한다.

```javascript
const newTable = new HashTable();
newTable.setItem('firstName', 'Hayeong');

console.log(newTable.getItem('firstName')); // Hayeong
```

이렇게 firstName이 드디어 Hayeong으로 리턴이 된다.
그런데 위에서 만들어 둔 해시 함수는 항상 5를 리턴하기 때문에 어떤 값을 setItem으로 table에 저장해도 같은 인덱스 3에 덮어씌워 저장이 될 것이다.

```javascript
const newTable = new HashTable();
newTable.setItem('firstName', 'Hayeong');
newTable.setItem('lastName', 'Shin');

console.log(newTable.getItem('firstName')); // Shin
```

이렇게 lastName키에 Shin값을 넣어 줬는데, firstName을 꺼내보니 Shin이 나온다.
해시 함수에서 무조건 키를 3으로 리턴하도록 해서 제대로 값이 저장되지 않고 있다.

## 3. 해시 함수 작성하는 방법

![image](https://user-images.githubusercontent.com/70371342/213858906-84ca88b6-c238-4e3e-bce3-976277e860e7.png)
해시 충돌을 방지하기 위해서는 해시 함수가 **key의 분포를 최대한 분산하도록** 작성해야 한다.
아까처럼 숫자 3만 리턴하게 된다면 값을 세팅하고 가져오는 과정에서 인덱스가 중복돼 데이터를 유실하거나 성능이 저하된다.
복수의 key가 동일한 메모리 주소 값으로 변환되는 경우를 **hash collision, 해시 충돌**이라고 한다.

```javascript
function hashStringToInt(s) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = hash * s.charCodeAt(i);
  }
  return hash;
}
```

해시 함수를 작성하는 한 가지 방법은 key로 들어오는 문자열을 charCode로 변환한 값을 활용하는 것이다.
문자열을 하나씩 돌면서 숫자로 바꿔준 후, 그 숫자를 해시 테이블의 인덱스를 계산하는 데 활용하는 것이다.
