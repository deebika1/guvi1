#Weight of character in ASCII value
#Function calling
def averageValue(s): 
    sum_char = 0 
    for i in range(len(s)): 
        sum_char += ord(s[i]) 
    # Returning average of chars 
    return sum_char 
# Driver code 
if __name__ == "__main__": 
	s = input()
	print(averageValue(s)) 
  
