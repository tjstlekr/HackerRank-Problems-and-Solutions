// var merge = function (nums1, m, nums2, n) {
//     let leftIndex = m - 1;
//     let rightIndex = n - 1;

//     for (let i = (m + n - 1); i >= 0; i--) {

//         if (nums1[leftIndex] == undefined || (!nums1[leftIndex] && nums2[rightIndex] == 0) || nums1[leftIndex] <= nums2[rightIndex]) {
//             nums1[i] = nums2[rightIndex];
//             rightIndex--;
//         } else if ((nums1[rightIndex] == undefined || nums1[rightIndex] == undefined && nums1[leftIndex]) || nums1[leftIndex] > nums2[rightIndex]) {
//             nums1[i] = nums1[leftIndex];
//             leftIndex--;
//         }
//     }
//     return nums1
// };


var merge = function (nums1, m, nums2, n) {
    let insertAt = (m + n - 1);
    m -= 1;
    n -= 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[insertAt] = nums1[m]
            m--;
        } else {
            nums1[insertAt] = nums2[n]
            n--;
        }
        insertAt--;
    }
};
//expected [-1,0,0,1,2,2,3,3,3]

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
// let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// let m = 6;
// let nums2 = [1, 2, 2];
let nums2 = [2, 5, 6];
let n = 3

const result = merge(nums1, m, nums2, n);


console.log("result");
console.log(result);