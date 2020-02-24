#Program to print product of digit
n=int(input())
prod=1
#a=[int(x) for x in str(n)]
while(n>0):
    b=n%10
    prod=prod*b
    n=n//10
print(prod)
    
  
