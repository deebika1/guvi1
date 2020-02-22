#Program to find difference between mini and max function of input
n=int(input())
a=[int(x) for x in input().split()][:n]
b=min(a)
c=max(a)
e=a.index(b)
f=a.index(c)
print(f-e)
