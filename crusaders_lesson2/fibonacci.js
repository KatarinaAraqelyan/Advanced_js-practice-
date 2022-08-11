function fibonacci(n) {
    fibonacci.cache = fibonacci.cache || [] ;

    if(n < 0) {
        return 0;
    } else if(n === 0 || n === 1 || n === 2) {
        fibonacci.cache[n] = n
    }
    if(!fibonacci.cache[n]) {
        fibonacci.cache[n] =  fibonacci(n-2) + fibonacci(n-1);
    }

    return fibonacci.cache[n];
}

console.log(fibonacci(7));