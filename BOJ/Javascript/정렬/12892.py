import sys

input = sys.stdin.read 
lines = input().strip().split("\n")

N, D = map(int, lines[0].split())
gifts = [tuple(map(int, line.split())) for line in lines[1:]]

gifts.sort(key=lambda x: x[0])

max_happiness = 0
cur_happiness = 0
left = 0

for right in range(N):
    cur_happiness += gifts[right][1]
    
    while gifts[right][0] - gifts[left][0] >= D:
        cur_happiness -= gifts[left][1]
        left += 1
        
    max_happiness = max(max_happiness, cur_happiness)
    
print(max_happiness)