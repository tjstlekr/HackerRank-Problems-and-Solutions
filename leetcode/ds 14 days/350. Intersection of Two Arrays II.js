
// var intersect = function (nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => a - b)
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let arr = []
//     while (leftIndex < nums1.length && rightIndex < nums2.length) {
//         if (nums1[leftIndex] == nums2[rightIndex]) {
//             arr.push(nums1[leftIndex])
//             leftIndex++;
//             rightIndex++;
//         } else if (nums1[leftIndex] < nums2[rightIndex]) {
//             leftIndex++;
//         } else {
//             rightIndex++;
//         }
//     }
//     return arr
// };






var intersect = function (nums1, nums2) {
    let arr = [];
    let hashmap = {};

    nums1.forEach(element => {
        hashmap[element] = 0;
    });

    nums2.forEach(element => {
        if (hashmap[element]) {
            
        } else {

        }
    })
};


// const result = intersect([1, 2, 2, 1], [2, 2])
const result = intersect([61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81], [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48])


// expected [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61]
//           [  ]
console.log("result")
console.log(result)