
from itertools import permutations
n = int(input())
k = int(input())
nums = [input() for _ in range(n)]

new_nums = set()
for c in permutations(nums, k):
  new_nums.add("".join(c))

print(len(new_nums))