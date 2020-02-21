#program to form a maximum number from input 
#Get input from user
N=input()
#change input as list
B=[int(x) for x in str(N)]
A=''
for i in range(len(N)):
    l=max(B)
    A+=str(l)
    B.remove(l)
#print maximum value
print(A)

