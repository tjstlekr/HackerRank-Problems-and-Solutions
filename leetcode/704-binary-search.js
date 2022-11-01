let search = function (nums, target) {

    let low = 0, high = nums.length - 1;
    let index = -1;
    while (low <= high) {
    let mid = Math.floor((low + high) /2) ;
        if (target == nums[low]) {
            index = low;
            break;
        } else  if (target == nums[high]) {
            index = high;
            break;
        } else if (nums[mid] == target) {
            index = mid;
            break;
        } else if (target > nums[mid]) {
            low = mid + 1;

        } else if (target < nums[mid]) {
            high = mid - 1;
        }

    }
    return index;
};

const result1 = search([-1, 0, 3, 5, 9, 12], 9)
const result2 = search([-1, 0, 3, 5, 9, 12], 2)

console.log("result1", result1)
console.log("result2", result2)