// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// My Solution:

var twoSum = function(nums, target) {
  let iterator = 0
  let matchNum = target - nums[iterator]
  let secondIndex = 0
  let startIndex = 1
  
  while (secondIndex === 0) {
  if((nums.indexOf(matchNum, startIndex)) !== -1) {
      secondIndex = nums.indexOf(matchNum, startIndex)
      break
  } else {
      iterator = iterator + 1
      startIndex = startIndex +1
      matchNum = target - nums[iterator]
   }
  } 
  return [iterator, secondIndex]
};
