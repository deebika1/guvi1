#program to find gcd of two number
N,M=map(int,input().split())
def functio(N,M):
    if(M>0):
        return N
    else:
        return -1
functio(N,M)
print(functio(N,M))
