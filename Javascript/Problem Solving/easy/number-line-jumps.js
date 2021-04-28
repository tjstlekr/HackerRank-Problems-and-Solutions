// https://www.hackerrank.com/challenges/kangaroo/problem

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    // (x2 - x1) * (v2 - v1) < 0 
    //In above expression x2 - x1 will always be positive based on the constraint
    // v2 - v1 if negative indicates that at some point x1 will either meet x2 or go ahead of x2 due to higher velocity
    // v2 - v1 if zero indicates both started at same velocity but diff position so will not meet
    // v2 - v1 if positive indicates that x1 will never meet x2 as velocity v2 > v1
    // the only logical point where two can meet is if (v2-v1) is negative
    //(x2 - x1) % (v2 - v1) == 0
    // if difference of two position is divisible by difference of velocity then two point can meet otherwise no

    return (x2 - x1) * (v2 - v1) < 0 && (x2 - x1) % (v2 - v1) == 0 ? "YES" : "NO";

}

console.log(kangaroo(0, 3, 4, 2));


// Solution Credits: TimSylvester (Hacker Rank)