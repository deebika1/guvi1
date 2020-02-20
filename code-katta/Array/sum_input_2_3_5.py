#Program to find sum of input is divisible by 2 3 and 5
N=int(input())
l=list(map(int,input().split()))
sum=0
for i in range(0,len(l)):
    sum=sum+l[i]
if((sum%2==0) and(sum%3==0) and(sum%5==0)):
    print("1")
else:
    print("0")
