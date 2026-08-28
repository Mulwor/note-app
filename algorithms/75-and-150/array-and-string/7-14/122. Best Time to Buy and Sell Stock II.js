// ! 122. Best Time to Buy and Sell Stock II
// * Links: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

// ! Description:
// ? You are given an integer array prices where prices[i] is the price of a
// ? given stock on the ith day. On each day, you may decide to buy and/or 
// ? sell the stock. You can only hold at most one share of the stock at any 
// ? time. However, you can sell and buy the stock multiple times on the same
// ? day, ensuring you never hold more than one share of the stock.
// ? Find and return the maximum profit you can achieve.

// ! Examples:
// ? Input: prices = [7,1,5,3,6,4] ===> Output: 7 <=== (5 - 1) + (6 - 3)
// ? Input: prices = [1,2,3,4,5] ===> Output: 4 <=== (5 - 1)
// ? Input: prices = [7,6,4,3,1] ===> Output: 0

var maxProfit = function(prices) {
  let profit = 0;
  
  for (let i = 0; i < prices.length - 1; i++) {
    // 7 < 1 (false); 1 < 5 (true); 5 < 3 (false); 3 < 6 (true); 6 < 4 (false)
    if (prices[i] < prices[i + 1]) {
      // 1, 5
      // 3, 6
      profit += prices[i] - prices[i + 1];
    }
  }
  
  return profit;
};
