#Find minimum and maximum values index position
N=int(input())
l=[int(x) for x in input().split()][:N]
#find minimum and maximum value of input series
a=l.index(min(l))
b=l.index(max(l))
print((a+1),end=" ")
print(b+1)
