#program to find a smallest number
#Get input from user
a,b=input("").split()
#Body of function
def num(a,b):
        if(a<b):
                return a
        else:
                return b
num(a,b)
print(num(a,b))
