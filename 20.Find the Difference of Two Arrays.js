var findDifference = function (nums1, nums2) {
    let arr1 = [];
    let arr2 = [];
  
    let i1 = 0;
    let i2 = 0;
  
    while (i1 < nums1.length || i2 < nums2.length) {
      if (nums1[i1]!==undefined && !nums2.includes(nums1[i1]) && !arr1.includes(nums1[i1])) arr1.push(nums1[i1]);
      if (nums2[i2]!==undefined && !nums1.includes(nums2[i2]) && !arr2.includes(nums2[i2])) arr2.push(nums2[i2]);
  
      i1++;
      i2++;
    }
  
    return [arr1, arr2];
  };
