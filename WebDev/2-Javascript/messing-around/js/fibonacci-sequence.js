function printFibonacci(n) {
    let a = 0;
    let b = 1;
    let fib = 0;
    let count = 0;
    while (count < n) {
       fib = a + b;
       console.log(`Fibonacci is currently: ${a}`);
       console.log(`Count: ${count}`);
       a = b;
       b = fib;
       count++;
    }
}

printFibonacci(100);
