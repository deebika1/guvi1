#Program to check vowel or not
#Get input from user
n=str(input())
count=0
for i in range(len(n)):
	#Check condition for vowel
	if(n[i]=='a' or n[i]=='e' or n[i]=='i' or n[i]=='o' or n[i]=='u'):
		count=count+1
if(count>0):
	print("yes")
else:
	print("no")  
