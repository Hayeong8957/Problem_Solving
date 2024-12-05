import heapq
# 입력 처리
import sys
input = sys.stdin.read if sys.platform == 'linux' else open('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').read

data = input().strip().split('\n')
N = int(data[0])

# 리스트를 d값 기준으로 오름차순 정렬
# 순간 순간 최소값을 구해줄 수 있는 최소 힙 모듈
# p값을 그떄그떄 우선순위 큐에 넣어주는데, 그 목록이 몇일 안에 해야하는 마감일을 넘긴 경우 가장 작은 값을 제거

lectures = [tuple(map(int, line.split())) for line in data[1:]]
lectures.sort(key=lambda x: x[1]) # x[0] : 오름차순, -x[0] : 내림차순

queue = []

for P, D in lectures:
  heapq.heappush(queue, P)
  if len(queue) > D:
    heapq.heappop(queue)

print(sum(queue))
