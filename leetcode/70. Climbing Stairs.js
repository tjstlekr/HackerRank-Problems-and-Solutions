var climbStairs = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let firstNumber = 1;
    let secondNumber = 2;
    let result = 0;
    for (let i = 2; i < n; i++) {
        result = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = result;
    }

    return result;

};

const result = climbStairs(5)

console.log("result")
console.log(result)