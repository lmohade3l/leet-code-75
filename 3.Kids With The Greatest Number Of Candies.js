/**
 There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, 
 and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.
 */
var kidsWithCandies = function (candies, extraCandies) {
    // let result = [];

    // for (let i = 0; i < candies?.length; i++) {
    // if (candies.every(item => item < extraCandies + candies[i] || item === extraCandies + candies[i])) {
    // result[i] = true;
    // } else {
    // result[i] = false;
    // }
    // }
    // return result;

    const result = candies?.map(candy => {
        if (candies.every(item => item < extraCandies + candy || item === extraCandies + candy)) {
            return true;
        } else {
            return false;
        }
    })

    return result;
};


