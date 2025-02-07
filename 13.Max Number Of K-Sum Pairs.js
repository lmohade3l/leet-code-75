// var maxOperations = function(nums, k) {
//     nums.sort();

//     let left = 0;
//     let right = nums.length -1;
//     let count = 0;

//     while(left < right) {
//         if(nums[left] + nums[right] === k) {
//             count ++;
//             left++;
//             right--;
//         } else if(nums[left] + nums[right] > k) {
//             right--;
//         } else if(nums[left] + nums[right] < k) {
//             left++;
//         }
//     }
//     return count;
// };

var maxOperations = function(nums, k) {
    const freq = new Map();
    let count = 0;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const num of nums) {
        const complement = k - num;
        
        if (freq.get(num) === 0) continue;
        
        if (freq.has(complement) && freq.get(complement) > 0) {
            if (num === complement) {
                if (freq.get(num) > 1) {
                    freq.set(num, freq.get(num) - 2);
                    count++;
                }
            } else {
                freq.set(num, freq.get(num) - 1);
                freq.set(complement, freq.get(complement) - 1);
                count++;
            }
        }
    }

    return count;
};
