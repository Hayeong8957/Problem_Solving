# 100만보다 작고 2 이상의 약수를 가지고 있다면, 틀린 비밀번호
import sys
path = __file__[0:-2] + 'txt'
sys.stdin = open(path, 'r')
input = sys.stdin.readline()

TC = int(input)
print(TC)

for _ in range(TC):
    number = int(sys.stdin.readline()) # 백준에서는 한 줄씩 Input()이렇게 하면 됨
    print(number)
    for i in range(2, 1_000_001):
        if number % i == 0:
            print("NO")
            break
        if i == 1_000_000:
            print("YES")
            break