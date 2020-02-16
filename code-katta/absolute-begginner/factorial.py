#Program to find factorial of a given number
#Get input from user
N=int(input(""))
#Initialize the value
fact=1
#Check the number is positive
def facto():
    fact=1
    if(N>0):
        for i in range(1,N+1):
            fact=fact*i
        return fact
    elif(N==0):
        return 0

facto()
print(facto())
