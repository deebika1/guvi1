#program to check the right sided triangle
#Get 3 input using map function
A,B,C=map(int,input().split())
#check for right angled triangle condition
if((A*A + B*B) == C*C):
    print("yes")
else:
    print("no")
