function fibonacci(n, memo = {}) {
    if (n in memo) {//Search number in memo
        return memo[n];
    }

    if (n <= 2) {
        return 1;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);//Save calculated number in memo

    return memo[n];
}
const n = 7
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);
