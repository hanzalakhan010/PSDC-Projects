function Fibonacci(n) {
    a = 1
    b = 1

    for (let i = 0; i < n + 1; i++) {
        temp = a + b
        a = b
        b = temp
        console.log(b)
    }
    // return b
}



Fibonacci(10)