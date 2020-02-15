#program to find number of days in a given month
#Get the input from user
N=int(input(""))
#check the value
if(N==1 or N==3 or N==5 or N==7 or N==8 or N==10 or N==12):
    print("31")
elif(N==4 or N==6 or N==9 or N==11):
    print("30")
elif(N==2):
    print("28")
else:
#display error input is not valid
    print("Error")
    
