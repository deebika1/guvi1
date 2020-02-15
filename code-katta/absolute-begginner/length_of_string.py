#Program to find a length of the string
#Function body
def length(A): 
    #Removing the whitespaces
    B=A.replace(" ", "") 
    return B 
# Get input from user 
A = input("") 
#Function calling
a=len(length(A))
#Display the output
print(a)
