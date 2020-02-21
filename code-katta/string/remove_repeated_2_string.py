#program to remove repeated string
S=input().split()
X=input()
i=S.count(X)
if(i>0):
	c=S.index(X)
	S.pop(c)
	print(*S,end='')
else:
	print(*S,end='')

