#program to find perfect square
import math 
#get two input from user
N,M = map(int,input().split())
#Make their square
X=N*M
#find square root
A=X**0.5
if (A==N): 
    print("yes") 
else: 
    print("no") 
