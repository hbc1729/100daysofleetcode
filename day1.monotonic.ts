// https://leetcode.com/problems/monotonic-array/description/


function isMonotonic(nums: number[]): boolean {
    let isMonotonicInc = true;
    let isMonotonicDesc = true;

    const len = nums.length;
 
    for (let i = 0; i <= len - 2; i++) {
        console.log(nums[i])
        if (nums[i] < nums[i + 1]) {
            isMonotonicDesc = false
        }
        if (nums[i] > nums[i + 1]) {
            isMonotonicInc = false
        }

    }

    return isMonotonicInc || isMonotonicDesc;
}

