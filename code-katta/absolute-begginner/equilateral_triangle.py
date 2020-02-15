# Python Program to find Area of an Equilateral Triangle
import math
side = float(input(''))
# calculate the area of equilateral triangle
def tri(side):
	Area = 1/4*((math.sqrt(3)*(side * side)))
	return Area
#calling the function
tri(side)  
#displaythe output
print("%.2f" %tri(side))

