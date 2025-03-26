var pivotIndex = function(nums) {
    let rightSum = nums.reduce((arr , cur) => arr+cur,0)
    let leftSum = 0;

    for (let i=0; i<nums?.length; i++) {
        rightSum = rightSum - nums[i];
        if (rightSum===leftSum) return i;

        leftSum = leftSum + nums[i]
    }

    return -1;
};
