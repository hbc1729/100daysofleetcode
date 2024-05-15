// https://leetcode.com/problems/sort-array-by-parity/description/

function sortArrayByParity(nums: number[]): number[] {
    let resultArray = [];

    nums.forEach(num => {
        if (num % 2 === 0) {
            resultArray.unshift(num)
        } else {
            resultArray.push(num)
        }
    })

    return resultArray;
};
