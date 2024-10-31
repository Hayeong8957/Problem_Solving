import sys
import heapq

path = __file__[0:-2] + 'txt'
sys.stdin = open(path, 'r')


# N, M = map(int, sys.stdin.readline().rstrip().split())
# data = [list(map(int, input().split())) for _ in range(M)]

# # 출력 (디버깅용)
# print(N)
# print(M)
# print(data)


# 답안
import sys
import heapq

input = sys.stdin.readline()
N, M = map(int, input().split())

print('input >> ', input)
# N, M = map(int, sys.stdin.readline().rstrip().split())
# print(N)
# print(M)

answer = []
graph = [[] for _ in range(N + 1)]
link = [0 for _ in range(N + 1)]

queue = []


for i in range(M):
    a, b = map(int, sys.stdin.readline().rstrip().split())
    graph[a].append(b)
    link[b] += 1

# print('graph >> ', graph)
# print('link >> ', link)

for i in range(1, N + 1):
    if link[i] == 0:
        heapq.heappush(queue, i)

# print('queue >> ', queue)

while queue:
    current = heapq.heappop(queue)
    print('current >> ', current)
    answer.append(current)

    for i in graph[current]:
        link[i] -= 1
        if link[i] == 0:
            heapq.heappush(queue, i)


print(" ".join(map(str, answer)))