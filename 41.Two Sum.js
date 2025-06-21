//hash map

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
*/


function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    map.set(nums[i], i);
  }
}
