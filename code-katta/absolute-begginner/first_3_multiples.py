#program to find multiple of 3
N=int(input(""))
l=[]
for i in range(1,4):
	l.append(i*N)
print(*l,end='')

