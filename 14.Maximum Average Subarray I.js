var findMaxAverage = function(nums, k) {
    if(nums?.length===1) return Number(nums[0].toFixed(5));

    let left = 0;
    let right = k-1;

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum / k);
    }
    
    
    return max;
};
