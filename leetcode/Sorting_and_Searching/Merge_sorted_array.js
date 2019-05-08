/**
 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] 
 * 
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 

 */

var findIndex = function(arr, num, arrEnd) {
  for (let l = 0; l < arr.length; l++) {
    if (arr[l] > num) {
      return l;
    } else if ((l === arrEnd) && arr[l] === 0) {
      return l;
    }
  }
};

var insertInArr = function(newIndex, arr, currentNum2) {
  for (let i = newIndex; i < arr.length; i++) {
    let tmp = arr[i];
    arr[i] = currentNum2;
    currentNum2 = tmp;
  }
  return arr;
};


var merge = function(nums1, m, nums2, n) {
  let j;
  let nums1Max = m;
  for (i = 0; i < n; i++) {
    j = findIndex(nums1, nums2[i], nums1Max);
    insertInArr(j, nums1, nums2[i]);
    nums1Max++;
  }
  return nums1;
};