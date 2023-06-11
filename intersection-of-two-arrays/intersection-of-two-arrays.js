/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set2 = new Set(nums2)
    return [...new Set(nums1)].filter(num1 => set2.has(num1))
};