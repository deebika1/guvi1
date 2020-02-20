#Program to add the input and find odd or even
#Get two input from user
N,M=map(int,input().split())
#add both the input
A=N+M
#check condition for even or odd
if(A%2==0):
	print("even")

else:
	print("odd")
