#Weight of the string is divisible by  or not
def averageValue(s): 
    sum_char = 0 
    for i in range(len(s)): 
        sum_char += ord(s[i]) 
    # Returning output 
    return sum_char 
# Driver code 
if __name__ == "__main__": 
	s = input()
if(averageValue(s)%8==0):
    print("1")
else:
    print("0")
