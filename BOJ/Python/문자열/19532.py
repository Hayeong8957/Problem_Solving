import sys
path = __file__[0:-2] + 'txt'
sys.stdin = open(path, 'r')
a,b,c,d,e,f = map(int,sys.stdin.readline().split())

for x in range(-10000, 10001):
  for y in range(-10000, 10001):
    if (a*x)+(b*y) == c and (d*x)+(e*y) == f:
      print(x, y)
      break

# 근의 공식 활용
# ax + by = p
# cx + dy = q
# y = (aq - cp) // (ad-bc)
# x = (dp - bq) // (ad - bc)


a,b,c,d,e,f = map(int,sys.stdin.readline().split())
x = ((e*c)-(b*f)) // ((a*e)-(b*d))
y = ((a*f)-(d*c)) // ((a*e)-(b*d))
print(x, y)