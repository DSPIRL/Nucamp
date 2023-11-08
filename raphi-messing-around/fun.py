nunTerms = int(input("How many terms of Fibonacci sequence to print? "))

# main method
def fibonacci(n):
    if n < 1:
        return n
    else:
        return(fibonacci(n-1) + fibonacci(n-2))

if nunTerms <= 0:
    print("Please enter a positive integer")
else:
    print("Fibonacci sequence:")
    for i in range(nunTerms):
        print(fibonacci(i))
