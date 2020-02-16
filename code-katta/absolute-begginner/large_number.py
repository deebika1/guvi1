#program to find largest number
#get three input from user
A=int(input(""))
B=int(input(""))
C=int(input(""))
def large():
    if(A>B and A>C):
        return A
    elif(B>C and B>A):
        return B
    else:
        return C
large()
print(large())
