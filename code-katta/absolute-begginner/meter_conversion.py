#program to find a meter conversion
#Get input from user
A=int(input(""))
def conversion(A):
	B=A*1000
	return B
def conversion2(A):
	C=A*100000
	return C
B=conversion(A)
C=conversion2(A)
print(B)
print(C)
