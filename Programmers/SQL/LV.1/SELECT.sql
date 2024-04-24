-- 참고 :  https://rachel0115.tistory.com/entry/SQL-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-SELECT-%EC%A0%88
-- SELECT문의 기본 형식
SELECT 열이름
FROM 테이블 이름
WHERE 조건식
GROUP BY 열이름
HAVING 조건식
ORDER BY 열이름
LIMIT 숫자

-- BETWEEN
SELECT * FROM member
WHERE height BETWEEN 160 and 165;
-- Height 컬럼 값이 160이상 165 이하

-- IN : 여러 값 매칭
-- addr 컬럼값이 경기, 전남, 경남인 데이터 조회
SELECT * FROM member
WHERE addr IN('경기', '전남', '경남');

SELECT * FROM member
WHERE addr = '경기' AND addr = '전남' AND addr='경남';

--LIKE -  문자열의 일부 글자 검색

-- mem_name 컬럼 값이 '블'로 시작하는 4글자 글자 데이터 조회
SELECT * FROM member WHERE mem_name LIKE '블___';

-- mem_name 컬럼 값이 '블'로 시작하는 모든 데이터 조회
SELECT * FROM member WHERE mem_name LIKE '블%';

-- mem_name 컬럼 값에 '블'이 들어가는 모든 데이터 조회
SELECT * FROM member WHERE mem_name LIKE '%블%';

-- LIMIT: 출력 개수 제한
SELECT * FROM member
	LIMIT 3;    		-- 상위 3건만 조회

SELECT * FROM member
	LIMIT 3, 2; 		-- 3번째 데이터부터 2건만 조회 (LIMIT 시작, 개수 )
	LIMIT 2 OFFSET 3; 	-- 위와 동일

-- DISTINCT -  중복 데이터 제거
-- addr 의 모든 컬럼 값을 중복을 제거하여 조회
SELECT DISTINCT addr
	FROM member;

-- 집계 함수
SUM() : 컬럼의 합계를 반환
AVG() : 컬럼의 평균을 반환
MIN() : 컬럼의 최소값을 반환
MAX() : 컬럼의 최대값을 반환
COUNT() : 행의 개수를 셈
COUNT(DISTINCT) : 행의 개수를 셈

---------------------------------------------------------------------------------


-- 특정 형질을 가지는 대장균 찾기
-- 2번 형질이 보유하지 않으면서 1번이나 3번 형질을 보유하고 있는 대장균 개체의 수(COUNT)를 출력하는 SQL 문을 작성해주세요. 1번과 3번 형질을 모두 보유하고 있는 경우도 1번이나 3번 형질을 보유하고 있는 경우에 포함합니다.

Select count(id) as COUNT
from ECOLI_DATA
where GENOTYPE & 2 = 0
and (GENOTYPE & 1 > 0 or GENOTYPE & 3 > 0)

-- 컬럼 & 값 > 0  포함되는거 찾을 때 비트연산
-- 컬럼 & 값 = 0 포함되지 않는 거 찾을 때 비트연산

---------------------------------------------------------------------------------

-- 가장 큰 물고기 10마리 구하기
-- FISH_INFO 테이블에서 가장 큰 물고기 10마리의 ID와 길이를 출력하는 SQL 문을 작성해주세요. 
-- 결과는 길이를 기준으로 내림차순 정렬하고, 길이가 같다면 물고기의 ID에 대해 오름차순 정렬해주세요. 
-- 단, 가장 큰 물고기 10마리 중 길이가 10cm 이하인 경우는 없습니다.

SELECT ID, LENGTH
FROM FISH_INFO
ORDER BY LENGTH DESC, ID ASC
LIMIT 10;

-- 내림차순 : DESC
-- 오름차순 : ASC

---------------------------------------------------------------------------------

-- [문제 설명]
-- EMPLOYEES 테이블은 자동차 판매 회사에서 일하고 있는 직원의 정보가 담긴 테이블입니다. 
-- EMPLOYEES 테이블 구조는 다음과 같으며, 
-- ID, NAME, SALARY, BRANCH_ID는 각각 직원의 아이디, 이름, 월급, 근무하는 대리점 아이디를 나타냅니다.
-- NAME | TYPE | NULLABLE
-- ID   | INT  | FALSE
-- NAME | VARCHER(N) | FALSE
-- SALARY | NUMERIC(N,M) | FALSE
-- BRANCH_ID | INT | FALSE

-- [문제]
-- EMPLOYEES 테이블을 이용해 지점 별 총급여액이 얼마인지 조회하는 SQL문을 작성해주세요.
-- 단, 결과는 지점의 ID순으로 정렬되어야 합니다.

SELECT BRANCH_ID, SUM(SALARY) as TOTAL 
FROM EMPLOYEES
WHERE BRANCH_ID
GROUP BY BRANCH_ID
ORDER BY BRANCH_ID ASC;

---------------------------------------------------------------------------------

--평균 일일 대여 요금 구하기
-- CAR_RENTAL_COMPANY_CAR 테이블에서 자동차 종류가 'SUV'인 자동차들의 평균 일일 대여 요금을 출력하는 SQL문을 작성해주세요. 
-- 이때 평균 일일 대여 요금은 소수 첫 번째 자리에서 반올림하고, 컬럼명은 AVERAGE_FEE 로 지정해주세요.

SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE='SUV';

-- ROUND(값, 자리수 반올림)

---------------------------------------------------------------------------------

-- 12세 이하인 여자 환자 목록 출력하기
-- PATIENT 테이블에서 12세 이하인 여자환자의 환자이름, 환자번호, 성별코드, 나이, 전화번호를 조회하는 SQL문을 작성해주세요. 이때 전화번호가 없는 경우, 
-- 'NONE'으로 출력시켜 주시고 결과는 나이를 기준으로 내림차순 정렬하고, 나이 같다면 환자이름을 기준으로 오름차순 정렬해주세요.

SELECT  PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') AS TLNO  FROM PATIENT
WHERE AGE <= 12 AND GEND_CD='W'
ORDER BY AGE DESC, PT_NAME ASC;

---------------------------------------------------------------------------------

-- 3월에 태어난 여성 회원 목록 출력하기

-- MEMBER_PROFILE 테이블에서 생일이 3월인 여성 회원의 ID, 이름, 성별, 생년월일을 조회하는 SQL문을 작성해주세요. 
-- 이때 전화번호가 NULL인 경우는 출력대상에서 제외시켜 주시고, 결과는 회원ID를 기준으로 오름차순 정렬해주세요.

SELECT MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE MONTH(DATE_OF_BIRTH) = 3 AND GENDER = 'W' AND TLNO IS NOT NULL
ORDER BY MEMBER_ID ASC

-- select 문에서 DATE_OF_BIRTH의 데이터 포맷을 DATA_FORMAT(컬럼 값, 형식)으로 맞춰서 출력


---------------------------------------------------------------------------------

--조건에 부합하는 중고거래 댓글 조회하기
-- USED_GOODS_BOARD와 USED_GOODS_REPLY 테이블에서 2022년 10월에 작성된 게시글 제목, 게시글 ID, 댓글 ID, 댓글 작성자 ID, 댓글 내용, 댓글 작성일을 조회하는 SQL문을 작성해주세요. 
-- 결과는 댓글 작성일을 기준으로 오름차순 정렬해주시고, 댓글 작성일이 같다면 게시글 제목을 기준으로 오름차순 정렬해주세요.

SELECT TITLE, BOARD.BOARD_ID, REPLY_ID, REPLY.WRITER_ID, REPLY.CONTENTS, DATE_FORMAT(REPLY.CREATED_DATE, '%Y-%m-%d') AS CREATED_DATE
FROM USED_GOODS_REPLY AS REPLY
LEFT JOIN USED_GOODS_BOARD AS BOARD
ON REPLY.BOARD_ID=BOARD.BOARD_ID
WHERE DATE_FORMAT(BOARD.CREATED_DATE, '%Y-%m') = '2022-10'
ORDER BY REPLY.CREATED_DATE, TITLE