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