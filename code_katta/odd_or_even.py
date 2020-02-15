#chech the input is odd or even
#Get input from user
a=float(input(""))
#check the input equal to zero
if(a==0):
#print zero
    print("Zero")
else:
#roundoff the input
    b=round(a)
    if(b%2==0):
        print("Even")
    else:
        print("Odd")
