import random 
from app.services.problem_service import Problem,generate_problem

print("addition or subtraction?")
problem = generate_problem(input())

print('How many rounds?')
inputRoundsinput = input()
inputRounds = int(inputRoundsinput)
operand1 = problem.operand1
operand2 = problem.operand2

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