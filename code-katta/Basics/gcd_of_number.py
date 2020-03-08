N,M = map(int,input("").split())
if(N>M):
    	grt=N
else:
    	grt=M
for i in range(1,grt+1):
    if(N%i==0 and M%i==0):
        gcd = i
print(gcd)
