#program to find the circumference of circle
import math
#Get input from user
radius = float(input(""))
#function definition
def cir(radius):
	circumference = 2 * math.pi * radius
	return circumference
#function calling
A=cir(radius)
#display output
print("%.2f" %A)
