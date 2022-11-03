var mySqrt = function (x) {

    if (x < 2) {
        return x;
    }

    let low = 2;
    let high = Math.trunc(x / 2);
    while (low <= high) {
        const mid = Math.trunc((low + high) / 2);


        const midSquare = mid * mid;
        if (midSquare == x) {
            return mid;
        } else if (low * low == x) {
            return low;
        } else if (high * high == x) {
            return high;
        } else if (midSquare > x) {
            high = mid - 1;
        } else if (midSquare < x) {
            low = mid + 1;
        }
    }
    return high
};

x = 6;
const result = mySqrt(x);
console.log("result")
console.log(result)