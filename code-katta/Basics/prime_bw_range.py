#Program to find the prime number between the range
L,R=map(int,input().split())
sum=0
for i in range(L,R+1):
    for j in range(2,i):
        if(i%j==0):
            break
    else:
        sum=sum+1
print(sum)
