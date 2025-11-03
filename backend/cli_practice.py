import random 
from app.services.problem_service import Problem,generate_problem

print("addition or subtraction?")
generate_problem(input())

print('How many rounds?')
inputRounds = input()
inputRounds = int(inputRounds)
operand1 = generate_problem.operand1
operand2 = generate_problem.operand2

for i in range(inputRounds):
    print('\nRound ', i + 1, ': \n')
    print(operand1, '+', operand2, '= ?')
    
while True:
    try:
        userinput = int(input())
        break
    except ValueError:
        print()

if userinput == Problem.answer:
    print('\ncorrect!\n')

else:
    print('\nincorrect\n')