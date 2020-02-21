#Program to find kth term of given string
#Get integer and string as input
S,K=input().split()
B = [str(x) for x in str(S)]
C=int(K)
for i in range(2,len(B)+1,C):
    print(B[i],end="")


