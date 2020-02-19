import hashlib
user="Durga"
password="Durga23"
word=hashlib.sha256(password.encode()).hexdigest()
for i in range(1,6):
    user1=input("Enter username")
    password1=input("Enter password: ")
    pass1=hashlib.sha256(password1.encode()).hexdigest()
    if(user==user1):
        if(pass1==word):
            print("ok")
            break
