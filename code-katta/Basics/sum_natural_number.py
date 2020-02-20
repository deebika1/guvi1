#Program to print sum of k natural number
#get the input from user
K=int(input())
sum=0
if(K>0):
    for i in range(1,K+1):
    	sum=sum+i
    print(sum)
