#Program to find ascending order of first list and decending order of second list then add
n,m=map(int,input().split())
a=[int(x) for x in input().split()][:n]
b=[int(y) for y in input().split()][:n]
a.sort()
b.sort()
c=a
d=b[::-1]
print(*c+d)
