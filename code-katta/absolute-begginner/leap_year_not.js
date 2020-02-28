#Leap year or not
#Get input from user
A=int(input(""))
count=0
#checking leap year	 condition
if(A%4==0 or A%400==0 and A%100!=100):
	print("Y")
else:
	print("N")
