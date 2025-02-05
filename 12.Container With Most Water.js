var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] > height[right]) right--;
        else left++;
    }

    return maxArea;
};

//used ternary operator at first, seems like Math.min is faster