#9 table
mul=int(input())
if(mul>0):
  n=[i*9 for i in range(1,mul+1)]
  print(*n,end='')
