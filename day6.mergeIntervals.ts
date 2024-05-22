// https://leetcode.com/problems/merge-intervals/

function merge(intervals: number[][]): number[][] {

    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    let merged = []

    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] >= intervals[i][0]) {
            prev[1] = prev[1] > intervals[i][1] ? prev[1] : intervals[i][1]
        } else {
            merged.push(prev);
            prev = intervals[i]
        }
    }
    merged.push(prev)
    return merged
};
