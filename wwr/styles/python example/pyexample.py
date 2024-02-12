condition = True
lives = 5
while (condition):
    print("playing")
    print(lives)
    ask = input("would you like to continue")
    if (ask == "no" or lives<1):
        break
        
    lives = lives - 1
print(lives)