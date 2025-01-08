/**
Given an integer array nums, return true 
    if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.
 */

var increasingTriplet = function (nums) {
  // for(let i=0; i<nums.length; i++) {
  //     for(let j=i+1; j<nums.length; j++) {
  //         for(let k=j+1; k<nums.length; k++) {
  //             if(nums[i]<nums[j] && nums[j]<nums[k]) return true
  //         }
  //     }
  // }
  // return false

  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums?.length; i++) {
    if (nums[i] < first) first = nums[i];
    else if (nums[i] < second && nums[i] > first) second = nums[i];
    else if (nums[i] > first && nums[i] > second) return true;
  }

  return false;
};
