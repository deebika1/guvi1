#program to remove repeated digit in list
n=int(input())
a=[int(x) for x in input().split()][:n]
c=[]
b=[]
for i in range(n):
    for j in range(i+1,n): 
        if(a[i]==a[j]):
            b.append(a[i])
            break
    else:
        c.append(a[i])
if(len(b)>0):
    for  i in b:
        v=c.index(i)
        c.pop(v)
if(len(c)>=2):
    print(c,end=' ')
else:
    print('none',end=' ')
