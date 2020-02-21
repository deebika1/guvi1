#program to remove repeated string
S=input().split()
X=input()
i=S.index(X)
S.pop(i)
for i in S:
    print(*S,end='')
