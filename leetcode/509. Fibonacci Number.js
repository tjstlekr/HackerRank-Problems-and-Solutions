var fib = function (n) {

    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1
    } else if (n == 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
};

const result = fib(6)
console.log("result")
console.log(result)
//


7

