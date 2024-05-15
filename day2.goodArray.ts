// https://leetcode.com/problems/check-if-array-is-good/

function isGood(nums: number[]): boolean {

    const tempNums = nums.sort((a, b) => a - b).slice(0, nums.length- 1) ;

    let isGoodFlag = true

    for (let i = 0; i <= tempNums.length - 1; i++) {
        if (tempNums[i] !== i + 1) {
            isGoodFlag = false
        }
    }

    return isGoodFlag && tempNums.length  === nums.sort((a, b) => a - b)[nums.length - 1]

};
