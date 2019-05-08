/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 i - array and target int
 o - array of two numbers, but the indices
 e - if there are duplicate elements in the index
   - if there are duplicate elements that equal the target
 c - only one solution, cannot use same element twice
 
 - create a hash that stores the indices the numbers appear in the array
 - if there is a duplicate, will hold the index of the duplicate number that appears last
 - go through the array and with each number check if 
  there is a number in the list that matches (target - current_number)
  and if the index of the duplicate number is greater so that it does not return the same 
  index twice
 
Space complexity: O(n) - creating a list that goes through each of the items
Time complexity: O(n) - going through the list once for n number of elements. Because 
  hash map allows for constant time lookup, complexity is still n
 */
var twoSum = function(nums, target) {
  let list = {};
  let i = 0;
  let difference;
  for (i = 0; i < nums.length; i++) {
    list[nums[i]] = i;
  }
  
  for (i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    if (list[difference] && i < list[difference]) {
      return [i, list[difference]];
    }
  }
};