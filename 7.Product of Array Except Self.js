/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
 */

var productExceptSelf = function (nums) {
  let leftProduct = [1];
  let leftP = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProduct.push(leftP * nums[i - 1]);
    leftP *= nums[i - 1];
  }

  let rightProduct = new Array(nums.length).fill(1);
  let rightP = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = rightP * nums[i + 1];
    rightP *= nums[i + 1];
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = rightProduct[i] * leftProduct[i];
  }

  return result;
};
