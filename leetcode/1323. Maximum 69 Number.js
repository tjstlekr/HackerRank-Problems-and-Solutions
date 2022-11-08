

var maximum69Number = function (num) {
    num = num.toString().split("");
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element == 6) {
            num[i] = 9;
            return parseInt(num.join(""), 10);
        }   
    }
    return parseInt(num.join(""), 10)
};

//todo
// var maximum69Number = function (num) {
//     array = [];
//     return Math.pow(10)
// };

console.log(maximum69Number(9669))