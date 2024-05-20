// https://leetcode.com/problems/find-the-duplicate-number/

function findDuplicate(nums: number[]): number {
    //   const obj = {}
    //   let temp;

    //   nums.forEach(n => {
    //     if(obj[n] === undefined) {
    //         obj[n] = 1
    //     }
    //     else {
    //         temp = n;
    //     }
    //   })!  

    //   return temp;

    nums.sort((a, b) => a - b);
    let num = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] - nums[i] === 0) num = nums[i]
    }
    return num;

};
