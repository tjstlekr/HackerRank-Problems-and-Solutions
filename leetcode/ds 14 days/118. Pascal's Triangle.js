var generate = function (numRows) {
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]

    let arr = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        let tempArr = [1]
        for (let j = 0; j < arr[i - 1].length - 1; j++) {
            tempArr.push(arr[i - 1][j] + arr[i - 1][j + 1]);
        }
        tempArr.push(1)
        arr.push(tempArr)
    }

    return arr
};

console.log(generate(4))