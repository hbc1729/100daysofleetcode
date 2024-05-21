// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices: number[]): number {

    let l = 0, r = 1, maxProf = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let prof = prices[r] - prices[l]

            if (prof > maxProf) maxProf = prof
        }
        else {
            l = r
        }
        r = r + 1
    }
    return maxProf
};
