#find number of repitation of list
N,K=map(int,input().split())
li=list(map(int,input().split()))
count=0
for i in range(len(li)):
    if(li[i]==K):
        count=count+1
if(count!=0):
    print(count-1)
else:
    print("-1")
