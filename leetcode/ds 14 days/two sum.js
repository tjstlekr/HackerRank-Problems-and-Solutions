var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[i];
        const expectedElement = target - currentElement;
        const index = nums.findIndex((e) => e == expectedElement)
        if (index != i && index != -1) {
            return [i, index]
        }
    }
    return [0, 0]
};

const result = twoSum([2, 7, 11, 15], 9);
const result1 = twoSum([3,2,4], 6);

console.log("result")
console.log(result)

console.log("result1")
console.log(result1)