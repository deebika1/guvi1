#Program to check the input is composite or not
def composite():
  c=0
  a=int(input(""))
  for i in range(1,a):
    if a%i==0:
      c=i
  if c>1:
    print("yes")
  else:
    print("no")
composite()
