print("welcome to test.py")

name = "ChatGPT User 1"
name2 = "OpenAI"

print(f"Hello, {name}!")
print(f"Hello, {name2 + ' ' + name}!")

x = [1, 2, 3, 4, 5]
y = "oussama"

print(x[3])       
print(y[2:5])     
print(x[1:])      
print(name.upper()) 
print(name2.lower())
print(name.split(" "))

name = input("Enter your name: ")
age = 19
print(f"Your name is {name} and you are {age} years old.")
old_age = input("Enter your old age: ")
new_age = int(old_age) + 5
print(f"In 5 years, you will be {new_age} years old.")
python = "awesome"
print(f"python is {python} and you will be {new_age} in 5 years.")
x.append(6)
print(x)
info = {"name": name    ,
        "age": 10,
        "python": python}
information = {"name": name2,
               "age": 20,
               "python": "great"}
print(info["name"])
print(info["age"])
print(info["python"])

a={1,2,3,4,5}
b={4,5,6,7,8}
c=a.union(b)
print(c)
b={
    "name": "oussama",
    "age": 22,
    "city": "casablanca"
}
yourage=input("enter your age: ")
def checkage(yourage):
    return int(yourage*12*30*24) 
print(f"your age in hours is: {checkage(int(yourage))} hours")
if int(yourage)>=18:
    print("you are adult")
else:
    print("you are minor")

number1 = float(input("Enter first number: "))
number2 = float(input("Enter second number: "))
operation = input("Enter operation (+, -, *, /): ")
if operation == "+":
    result = number1 + number2
    print(f"{number1} + {number2} = {result}")
elif operation == "-":
    result = number1 - number2
    print(f"{number1} - {number2} = {result}")
elif operation == "*":
    result = number1 * number2
    print(f"{number1} * {number2} = {result}")
elif operation == "/":      
    if number2 != 0:
        result = number1 / number2
        print(f"{number1} / {number2} = {result}")
    else:
        print("Error: Division by zero is not allowed.")
else:
    print("Invalid operation")
