from app.services.problem_service import generate_problem

mode = input("addition or subtraction?")

print('How many rounds?')
inputRounds = input()
inputRounds = int(inputRounds)

for i in range(inputRounds):
    problem = generate_problem(mode)
    operand1 = problem.operand1
    operand2 = problem.operand2
    operator = problem.operator
    print('\nRound ', i + 1, ': \n')
    print(operand1, operator, operand2, '= ?')
    
    while True:
        try:
            userinput = int(input())
            break
        except ValueError:
            print()

    if userinput == problem.answer:
        print('\ncorrect!\n')

    else:
        print('\nincorrect\n')