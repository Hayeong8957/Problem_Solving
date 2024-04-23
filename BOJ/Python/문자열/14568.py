import sys
path = __file__[0:-2] + 'txt'
sys.stdin = open(path, 'r')
input = sys.stdin.readline()

candy=int(input)
answer = 0

for A in range(0, candy + 1):
  for B in range(0, candy + 1):
    for C in range(0, candy + 1):
      if candy == A + B + C:
        if A >= B+2:
          if A != 0 and B != 0 and C != 0:
            if C % 2 == 0:
              answer += 1

print(answer)